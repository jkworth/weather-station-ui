import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeewxDashboardComponent} from './weewx/dashboard/weewx-dashboard.component';


const routes: Routes = [{
    path: 'dashboard',
    component: WeewxDashboardComponent
}, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
