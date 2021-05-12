import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../../environments/environment';
import { OutsideTemperatureComponent } from './dashboard/outside-temperature/outside-temperature.component';
import { TemporalLineChartComponent } from './dashboard/temporal-line-chart/temporal-line-chart.component';
import { WxDashboardComponent } from './dashboard/wx-dashboard.component';
import { WxService } from './service/wx.service';
import { stores } from './stores';

@NgModule({
  imports: [
    NgxsModule.forRoot([...stores]),
    !environment.production ? NgxsLoggerPluginModule.forRoot() : [],
    HttpClientModule
  ],
  declarations: [WxDashboardComponent, OutsideTemperatureComponent, TemporalLineChartComponent],
  providers: [HttpClientModule]
})
export class WxModule {
  constructor(wxService: WxService) {
    wxService.start();
  }
}
