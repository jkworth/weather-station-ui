import * as am4charts from '@amcharts/amcharts4/charts';
import {ClockHand} from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import {Label} from '@amcharts/amcharts4/core';
import {AfterViewInit, Component, ElementRef, HostListener, NgZone, OnDestroy, ViewChild} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArchiveEntity} from '../../entities';
import {ArchiveStateModel, ARCHIVE_STATE_TOKEN} from '../../stores/archive/archive.state';

@Component({
    selector: 'weewx-outside-temperature',
    templateUrl: './outside-temperature.component.html',
    styleUrls: ['./outside-temperature.component.styl']
})
export class OutsideTemperatureComponent implements AfterViewInit, OnDestroy {

    @ViewChild('displayElement')
    displayEleRef: ElementRef;

    @Select(ARCHIVE_STATE_TOKEN)
    archives$: Observable<ArchiveStateModel>;

    private chart: am4charts.GaugeChart;
    private axis: am4charts.ValueAxis<am4charts.AxisRendererCircular>;
    private hand: ClockHand;
    private tempLabel: Label;
    private humidityLabel: Label;
    private feelsLikeLabel: Label;

    constructor(private zone: NgZone) {}

    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.setupChart();
            this.setupMainTempLabel();
            this.setupDegreeIndicatorLabel();
            this.setupColorArc();
            this.setupTempIndicatorHand();
            this.setupHumidityLabel();
            this.setupFeelLikeLabel();
        });

        this.handleDataUpdates();
    }

    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }

    @HostListener('window:resize', [])
    onResize() {
        this.chart.deepInvalidate();
    }

    private setupTempIndicatorHand() {
        this.hand = this.chart.hands.push(new am4charts.ClockHand());
        this.hand.pin.disabled = true;
        this.hand.fill = am4core.color('#ddd');
        this.hand.stroke = am4core.color('#ddd');
        this.hand.innerRadius = am4core.percent(70);
        this.hand.radius = am4core.percent(85);
        this.hand.startWidth = 10;
        this.hand.value = Number.MIN_VALUE;
    }

    private setupColorArc() {
        const colorRanges = [
            {stop: -25, color: '#9c2faf'},
            {stop: 0, color: '#653eb4'},
            {stop: 10, color: '#4055b2'},
            {stop: 20, color: '#587bf7'},
            {stop: 30, color: '#1eaaf1'},
            {stop: 40, color: '#1bbed0'},
            {stop: 50, color: '#159587'},
            {stop: 60, color: '#2d9932'},
            {stop: 70, color: '#8bc051'},
            {stop: 80, color: '#fdc130'},
            {stop: 90, color: '#fc9729'},
            {stop: 100, color: '#fb572f'},
            {stop: 200, color: '#fb2f2f'}
        ];

        colorRanges.forEach((colorRange, index, array) => {
            const range = this.axis.axisRanges.create();
            range.value = index === 0 ? -100 : array[index - 1].stop;
            range.endValue = colorRange.stop;
            range.axisFill.fillOpacity = 1;
            range.axisFill.zIndex = -1;
            range.axisFill.fill = am4core.color(colorRange.color);
        });
    }

    private setupDegreeIndicatorLabel() {
        const degreeLabel = this.chart.createChild(am4core.Label);
        degreeLabel.isMeasured = false;
        degreeLabel.fontSize = '2vw';
        degreeLabel.align = 'center';
        degreeLabel.x = am4core.percent(88);
        degreeLabel.y = am4core.percent(100);
        degreeLabel.horizontalCenter = 'middle';
        degreeLabel.verticalCenter = 'middle';
        degreeLabel.fill = am4core.color('rgba(221,221,221,0.60)');
        degreeLabel.text = '°F';
    }

    private setupMainTempLabel() {
        this.tempLabel = this.chart.createChild(am4core.Label);
        this.tempLabel.isMeasured = false;
        this.tempLabel.fontSize = '12vw';
        this.tempLabel.align = 'center';
        this.tempLabel.x = am4core.percent(50);
        this.tempLabel.y = am4core.percent(60);
        this.tempLabel.horizontalCenter = 'middle';
        this.tempLabel.verticalCenter = 'middle';
        this.tempLabel.fill = am4core.color('#ddd');
        this.tempLabel.text = '-';
    }

    private setupChart() {
        this.chart = am4core.create(this.displayEleRef.nativeElement, am4charts.GaugeChart);
        this.chart.responsive.enabled = true;
        this.chart.startAngle = -220;
        this.chart.endAngle = 40;

        this.chart.padding(0, -20, 20, -5);
        this.chart.innerRadius = -15;

        this.axis = this.chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
        this.axis.min = -20;
        this.axis.max = 120;
        this.axis.strictMinMax = true;
        this.axis.renderer.labels.template.radius = 40;
        this.axis.renderer.labels.template.disabled = true;
    }

    private handleDataUpdates() {
        this.archives$.pipe(map((archives) => {
            return archives.records[archives.records.length - 1];
        })).subscribe((archive: ArchiveEntity) => {
            if (!archive) {
                return;
            }

            this.zone.runOutsideAngular(() => {
                this.hand.showValue(archive.outsideTemperature, 1000, am4core.ease.cubicInOut);
                this.tempLabel.text = Math.round(archive.outsideTemperature).toString();
                this.humidityLabel.text = `${Math.round(archive.outsideHumidity).toString()}`;
                this.feelsLikeLabel.text = `${Math.round(archive.heatIndex).toString()}`;
            });
        });
    }

    private setupHumidityLabel() {
        this.humidityLabel = this.chart.createChild(am4core.Label);
        this.humidityLabel.isMeasured = false;
        this.humidityLabel.fontSize = '4vw';
        this.humidityLabel.align = 'center';
        this.humidityLabel.x = am4core.percent(35);
        this.humidityLabel.y = am4core.percent(100);
        this.humidityLabel.horizontalCenter = 'middle';
        this.humidityLabel.verticalCenter = 'middle';
        this.humidityLabel.fill = am4core.color('#1eaaf1');
        this.humidityLabel.text = '-';

        const valueTypeLabel = this.chart.createChild(am4core.Label);
        valueTypeLabel.isMeasured = false;
        valueTypeLabel.fontSize = '2vw';
        valueTypeLabel.align = 'center';
        valueTypeLabel.x = am4core.percent(35);
        valueTypeLabel.y = am4core.percent(90);
        valueTypeLabel.horizontalCenter = 'middle';
        valueTypeLabel.verticalCenter = 'middle';
        valueTypeLabel.fill = am4core.color('#1eaaf1');
        valueTypeLabel.text = 'Humidity';
    }

    private setupFeelLikeLabel() {
        this.feelsLikeLabel = this.chart.createChild(am4core.Label);
        this.feelsLikeLabel.isMeasured = false;
        this.feelsLikeLabel.fontSize = '4vw';
        this.feelsLikeLabel.align = 'center';
        this.feelsLikeLabel.x = am4core.percent(63);
        this.feelsLikeLabel.y = am4core.percent(100);
        this.feelsLikeLabel.horizontalCenter = 'middle';
        this.feelsLikeLabel.verticalCenter = 'middle';
        this.feelsLikeLabel.fill = am4core.color('#fb572f');
        this.feelsLikeLabel.text = '-';

        const valueTypeLabel = this.chart.createChild(am4core.Label);
        valueTypeLabel.isMeasured = false;
        valueTypeLabel.fontSize = '2vw';
        valueTypeLabel.align = 'center';
        valueTypeLabel.x = am4core.percent(63);
        valueTypeLabel.y = am4core.percent(90);
        valueTypeLabel.horizontalCenter = 'middle';
        valueTypeLabel.verticalCenter = 'middle';
        valueTypeLabel.fill = am4core.color('#fb572f');
        valueTypeLabel.text = 'Heat Index';
    }
}
