import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsModule} from '@ngxs/store';
import {environment} from '../../environments/environment';
import {OutsideTemperatureComponent} from './dashboard/outside-temperature/outside-temperature.component';
import {TemporalLineChartComponent} from './dashboard/temporal-line-chart/temporal-line-chart.component';
import {WeewxDashboardComponent} from './dashboard/weewx-dashboard.component';
import {stores} from './stores';

@NgModule({
    imports: [
        NgxsModule.forRoot([...stores]),
        !environment.production ? NgxsLoggerPluginModule.forRoot() : [],
        HttpClientModule
    ],
    declarations: [WeewxDashboardComponent, OutsideTemperatureComponent, TemporalLineChartComponent],
    providers: [HttpClientModule]
})
export class WeeWXModule {
}

