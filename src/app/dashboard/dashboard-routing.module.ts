import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardReportComponent } from './dashboard-report/dashboard-report.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardMainComponent
            },
            {
                path: 'dashboard/report',
                component: DashboardReportComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
