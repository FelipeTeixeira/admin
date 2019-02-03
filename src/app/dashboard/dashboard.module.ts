import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardReportComponent } from './dashboard-report/dashboard-report.component';
// tslint:disable-next-line:max-line-length
import { DashboardReportSocialActivitiesComponent } from './dashboard-report/dashboard-report-social-activities/dashboard-report-social-activities.component';

@NgModule({
    declarations: [
        DashboardMainComponent,
        DashboardReportComponent,
        DashboardReportSocialActivitiesComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartsModule
    ]
})
export class DashboardModule { }
