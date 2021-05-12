import * as am4core from '@amcharts/amcharts4/core';
import { Component } from '@angular/core';

am4core.options.minPolylineStep = 5;

@Component({
  selector: 'wx-dashboard',
  templateUrl: './wx-dashboard.component.html',
  styleUrls: ['./wx-dashboard.component.styl']
})
export class WxDashboardComponent {}
