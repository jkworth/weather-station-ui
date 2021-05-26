import * as am4charts from '@amcharts/amcharts4/charts';
import { DateAxis, Legend, ValueAxis, XYChart, XYCursor, XYSeries } from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import { Color, NumberFormatter } from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Archive } from 'src/generated/graphql';
import { ArchiveFacade } from '../../stores/archive/archive-store.facade';

@Component({
  selector: 'wx-temporal-line-chart',
  templateUrl: './temporal-line-chart.component.html',
  styleUrls: ['./temporal-line-chart.component.styl']
})
export class TemporalLineChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('displayElement')
  displayEleRef: ElementRef;

  private chart: am4charts.XYChart;
  private rainAxis: ValueAxis;

  private subscriptions = new Subscription();

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone, private archiveFacade: ArchiveFacade) {}

  ngAfterViewInit(): void {
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);
      am4core.options.autoDispose = true;

      this.setupChart();
    });

    // setInterval(() => {
    //   if (this.chart.data.length > 0) {
    //     this.updateData([{ ...this.chart.data[this.chart.data.length - 1], timestamp: new Date() }]);
    //   }
    // }, 5000);

    this.archiveFacade.values$.subscribe(this.updateData.bind(this));
  }

  ngOnDestroy(): void {
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });

    this.subscriptions.unsubscribe();
  }

  // Run the function only in the browser
  private browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  private updateData(archives: Archive[]) {
    if (!Array.isArray(archives)) {
      return;
    }

    this.browserOnly(() => {
      let numberOfItemsToRemove = this.chart.data.length;

      if (this.chart.data.length > 0) {
        archives = archives.filter(
          (archive) => archive.timestamp > this.chart.data[this.chart.data.length - 1].timestamp
        );
        numberOfItemsToRemove = archives.length;
      }

      this.chart.addData(archives, numberOfItemsToRemove);
    });
  }

  private setupChart() {
    this.chart = am4core.create(this.displayEleRef.nativeElement, XYChart);
    this.chart.dateFormatter.dateFormat = 'HH:mm';
    this.chart.responsive.enabled = true;

    this.createDateAxis();
    this.createTemperatureAxis();
    this.createPressureAxis();
    this.createRainAxis();

    this.setupCursor();
    this.setupLegend();
  }

  private createTemperatureAxis(): void {
    const format = '#.0';
    const tempValueAxis = this.createValueAxis(am4core.color('rgba(255,0,0,0.85)'), format);
    const dewPointValueAxis = this.createValueAxis(am4core.color('#005000'), format);
    dewPointValueAxis.renderer.labels.template.disabled = true;
    dewPointValueAxis.renderer.line.paddingLeft = 4;

    this.createSeries('Temp (°F)', 'tempF', am4core.color('rgba(255,0,0,0.85)'), format, tempValueAxis);
    this.createSeries(`Dew Point (°F)`, 'dewPointF', am4core.color('#005000'), format, tempValueAxis);
  }

  private createPressureAxis(): void {
    const format = '#.00';
    const color = am4core.color('#797979');
    const valueAxis = this.createValueAxis(color, format, true);
    this.createSeries('Pressure (inHg)', 'pressureinHg', color, format, valueAxis);
  }

  private createRainAxis(): void {
    const format = '#.00';
    const color = am4core.color('#2b3d79');

    this.rainAxis = this.createValueAxis(color, format, true);
    this.rainAxis.min = 0;

    const series = this.createSeries('Rain (in/hr)', 'rainIn', color, format, this.rainAxis);
    series.fillOpacity = 0.25;
    series.fill = color;
  }

  private createDateAxis(): void {
    const dateAxis = this.chart.xAxes.push(new DateAxis());
    dateAxis.renderer.grid.template.location = 0.5;
    dateAxis.renderer.minGridDistance = 40;
    dateAxis.renderer.labels.template.fill = am4core.color('#ddd');
    dateAxis.renderer.grid.template.stroke = am4core.color('#ddd');
    dateAxis.cursorTooltipEnabled = false;
    dateAxis.renderer.labels.template.fontSize = 12;
    dateAxis.groupData = true;
  }

  private setupCursor(): void {
    this.chart.cursor = new XYCursor();
    this.chart.cursor.lineX.stroke = am4core.color('#ddd');
    this.chart.cursor.lineY.stroke = this.chart.cursor.lineX.stroke;
    this.chart.cursor.maxTooltipDistance = 0;
  }

  private setupLegend(): void {
    const legend = (this.chart.legend = new Legend());
    legend.labels.template.fill = am4core.color('#ddd');
    legend.labels.template.fontSize = 14;

    legend.markers.template.height = 1;
    legend.marginBottom = -20;
  }

  private createSeries(label: string, fieldName: string, color: Color, format: string, valueAxis: ValueAxis): XYSeries {
    const series = this.chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = fieldName;
    series.dataFields.dateX = 'timestamp';
    series.yAxis = valueAxis;
    series.name = label;
    series.tooltipText = '{valueY}';
    series.stroke = color;
    series.strokeWidth = 3;
    series.numberFormatter = new NumberFormatter();
    series.numberFormatter.numberFormat = format;
    series.showOnInit = false;
    series.zIndex = this.chart.yAxes.indexOf(valueAxis) * -1;

    series.adapter.add('tooltipText', () => {
      let text = '[bold]{dateX}[/]\n';
      this.chart.series.each((item) => {
        text +=
          `[${(item.stroke as Color).hex}]●[/] ${item.name.replace(/ \([^)]*\)/, '')}: ` +
          `{${item.dataFields.valueY}.formatNumber('${item.numberFormatter.numberFormat as string}')}` +
          `${item.dataFields.valueY === 'outsideHumidity' ? '%' : ''}\n`;
      });
      return text;
    });

    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color('#ddd');
    series.tooltip.label.fill = am4core.color('#000');

    return series;
  }

  private createValueAxis(color: Color, format: string, opposite = false): ValueAxis {
    const valueAxis = this.chart.yAxes.push(new ValueAxis());
    valueAxis.renderer.labels.template.fill = color.lighten(0.3);
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.labels.template.numberFormatter = new NumberFormatter();
    valueAxis.renderer.labels.template.numberFormatter.numberFormat = format;
    valueAxis.renderer.labels.template.fontSize = 12;
    valueAxis.renderer.opposite = opposite;
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 3;
    valueAxis.renderer.line.stroke = color;
    valueAxis.renderer.grid.template.strokeOpacity = 0;

    return valueAxis;
  }
}
