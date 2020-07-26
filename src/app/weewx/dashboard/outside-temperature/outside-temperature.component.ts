import * as am4charts from '@amcharts/amcharts4/charts';
import {ClockHand} from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import {Label} from '@amcharts/amcharts4/core';
import {AfterViewInit, Component, ElementRef, HostListener, NgZone, OnDestroy, ViewChild} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArchiveEntity} from '../../entities';
import {ARCHIVE_STATE_TOKEN, ArchiveStateModel} from '../../stores/archive/archive.state';

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
    private hand: ClockHand;
    private label: Label;

    constructor(private zone: NgZone) {
    }

    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.chart = am4core.create(this.displayEleRef.nativeElement, am4charts.GaugeChart);
            this.chart.responsive.enabled = true;
            this.chart.startAngle = -220;
            this.chart.endAngle = 40;

            this.chart.padding(0, -20, 20, -5);
            this.chart.innerRadius = -15;

            const axis = this.chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
            axis.min = -20;
            axis.max = 120;
            axis.strictMinMax = true;
            axis.renderer.labels.template.radius = 40;
            axis.renderer.labels.template.disabled = true;

            // Main label
            this.label = this.chart.createChild(am4core.Label);
            this.label.isMeasured = false;
            this.label.fontSize = '12vw';
            this.label.align = 'center';
            this.label.x = am4core.percent(50);
            this.label.y = am4core.percent(55);
            this.label.horizontalCenter = 'middle';
            this.label.verticalCenter = 'middle';
            this.label.fill = am4core.color('#ddd');
            this.label.text = '-';

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
                const range = axis.axisRanges.create();
                range.value = index === 0 ? -100 : array[index - 1].stop;
                range.endValue = colorRange.stop;
                range.axisFill.fillOpacity = 1;
                range.axisFill.zIndex = -1;
                range.axisFill.fill = am4core.color(colorRange.color);
            });

            this.hand = this.chart.hands.push(new am4charts.ClockHand());
            this.hand.pin.disabled = true;
            this.hand.fill = am4core.color('#ddd');
            this.hand.stroke = am4core.color('#ddd');
            this.hand.innerRadius = am4core.percent(70);
            this.hand.radius = am4core.percent(85);
            this.hand.startWidth = 10;
            this.hand.value = Number.MIN_VALUE;
        });

        this.archives$.pipe(map((archives) => {
            return archives.records[archives.records.length - 1];
        })).subscribe((archive: ArchiveEntity) => {
            if (!archive) {
                return;
            }

            this.zone.runOutsideAngular(() => {
                this.hand.showValue(archive.outsideTemperature, 1000, am4core.ease.cubicInOut);
                this.label.text = Math.round(archive.outsideTemperature).toString();
            });
        });
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
}
