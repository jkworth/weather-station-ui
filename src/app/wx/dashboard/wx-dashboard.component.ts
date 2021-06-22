import * as am4core from '@amcharts/amcharts4/core';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { map } from 'rxjs/operators';
import { Temperature } from 'src/generated/graphql';
import { TemperatureFacade } from '../stores/temperatures/temperatures.facade';

am4core.options.minPolylineStep = 5;

@Component({
  selector: 'wx-dashboard',
  templateUrl: './wx-dashboard.component.html',
  styleUrls: ['./wx-dashboard.component.styl']
})
export class WxDashboardComponent implements OnInit {
  lastUpdateTime: moment.Moment;

  constructor(public temperaturesFacade: TemperatureFacade) {}

  ngOnInit(): void {
    this.temperaturesFacade.values$.pipe(map((value) => value.slice(-1)[0])).subscribe((value: Temperature) => {
      if (!value) {
        return;
      }
      this.lastUpdateTime = moment();
    });

    setInterval(() => {
      console.log(moment.duration(moment().diff(this.lastUpdateTime)).asMinutes());
      // if we have not gotten data in over 10 mins then reload the page
      if (moment.duration(moment().diff(this.lastUpdateTime)).asMinutes() > 10) {
        window.location.reload();
      }
    }, 10 * 1000);
  }
}
