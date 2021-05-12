import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WxDashboardComponent } from './wx/dashboard/wx-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: WxDashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
