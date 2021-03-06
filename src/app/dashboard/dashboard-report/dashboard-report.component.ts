import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './dashboard-report.component.html',
    styleUrls: ['./dashboard-report.component.scss']
})
export class DashboardReportComponent implements OnInit {
    // lineChart
    lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Facebook' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'WhatsApp' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Twitter' }
    ];
    lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    lineChartOptions: any = {
        responsive: true
    };
    lineChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(66, 103, 178, 0.4)',
        },
        {
            backgroundColor: 'rgba(0, 150, 136, 0.4)',
        },
        {
            backgroundColor: 'rgba(29, 161, 242, 0.4)',
        }
    ];
    lineChartLegend = true;
    lineChartType = 'line';

    constructor() { }

    ngOnInit() {
    }

    // events
    chartClicked(e: any): void {
        console.log(e);
    }

    chartHovered(e: any): void {
        console.log(e);
    }
}
