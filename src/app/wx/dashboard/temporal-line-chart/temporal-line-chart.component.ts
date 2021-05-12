import * as am4charts from '@amcharts/amcharts4/charts';
import { DateAxis, Legend, ValueAxis, XYChart, XYCursor, XYSeries } from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import { Color, NumberFormatter } from '@amcharts/amcharts4/core';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { tz } from 'moment-timezone';
import { Subscription } from 'rxjs';
import { ArchiveEntity } from '../../entities';

@Component({
  selector: 'wx-temporal-line-chart',
  templateUrl: './temporal-line-chart.component.html',
  styleUrls: ['./temporal-line-chart.component.styl']
})
export class TemporalLineChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('displayElement')
  displayEleRef: ElementRef;

  // @Select(ARCHIVE_STATE_TOKEN)
  // archives$: Observable<ArchiveStateModel>;

  private chart: am4charts.XYChart;
  private dateAxis: DateAxis;
  private rainAxis: ValueAxis;

  private subscriptions = new Subscription();

  constructor(@Inject(DOCUMENT) private document: Document, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.setupChart();

    // this.subscriptions.add(
    //   this.archives$
    //     .pipe(
    //       map((archives) => {
    //         return archives.records;
    //       })
    //     )
    //     .subscribe((archives: ArchiveEntity[]) => {
    //       this.updateData(archives);
    //     })
    // );
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });

    this.subscriptions.unsubscribe();
  }

  private updateData(archives: ArchiveEntity[]) {
    if (!Array.isArray(archives)) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      // Add data
      const lastEntry = (this.chart.data as ArchiveEntity[])[this.chart.data.length - 1]?.dateTime || 0;
      const newArchives = archives.filter((archive) => archive.dateTime > lastEntry);

      if (newArchives.length === 0) {
        return;
      }

      let removeCount = 0;

      if (this.chart.data.length + newArchives.length > archives.length) {
        removeCount = this.chart.data.length + newArchives.length - archives.length;
      }

      this.chart.addData(
        newArchives.map((archive) => {
          return {
            ...archive,
            dateTime: tz(archive.dateTime, archive.stationTimezone).toDate()
          };
        }),
        removeCount
      );
    });
  }

  private setupChart() {
    this.zone.runOutsideAngular(() => {
      this.chart = am4core.create(this.displayEleRef.nativeElement, XYChart);
      this.chart.dateFormatter.dateFormat = 'HH:mm';
      this.chart.responsive.enabled = true;

      this.createDateAxis();
      this.createTemperatureAxis();
      this.createPressureAxis();
      this.createRainAxis();

      this.setupCursor();
      this.setupLegend();
    });
  }

  private createTemperatureAxis(): void {
    const format = '#.0';
    const tempValueAxis = this.createValueAxis(am4core.color('rgba(255,0,0,0.85)'), format);
    const dewpointValueAxis = this.createValueAxis(am4core.color('#005000'), format);
    dewpointValueAxis.renderer.labels.template.disabled = true;
    dewpointValueAxis.renderer.line.paddingLeft = 4;

    this.createSeries('Temp (°F)', 'outsideTemperature', am4core.color('rgba(255,0,0,0.85)'), format, tempValueAxis);
    this.createSeries(`Dew Point (°F)`, 'dewPoint', am4core.color('#005000'), format, tempValueAxis);
  }

  private createPressureAxis(): void {
    const format = '#.00';
    const color = am4core.color('#797979');
    const valueAxis = this.createValueAxis(color, format, true);
    this.createSeries('Pressure (inHg)', 'pressure', color, format, valueAxis);
  }

  private createRainAxis(): void {
    const format = '#.00';
    const color = am4core.color('#2b3d79');

    this.rainAxis = this.createValueAxis(color, format, true);
    this.rainAxis.min = 0;

    const series = this.createSeries('Rain (in)', 'rainAccumulation', color, format, this.rainAxis);
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

    this.dateAxis = dateAxis;
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
    series.dataFields.dateX = 'dateTime';
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
