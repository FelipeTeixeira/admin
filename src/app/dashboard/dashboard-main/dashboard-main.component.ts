import { Component, OnInit } from '@angular/core';

const navList = [
    {
        name: 'Ativar', icon: 'active',
        links: [
            { name: 'active', url: 'active' },
            { name: 'reality', url: 'active/reality' }
        ]
    },
    {
        name: 'Fidelizar', icon: 'fidelity',
        links: [
            { name: 'engagement', url: 'fidelity/engagement' },
            { name: 'buy-win', url: 'fidelity/buy-win' },
            { name: 'cupons', url: 'fidelity/cupons' }
        ]
    },
    {
        name: 'Promover', icon: 'promote',
        links: [
            { name: 'publicity', url: 'promote/publicity' },
            { name: 'direct-mail', url: 'promote/direct-mail' },
            { name: 'push', url: 'promote/push' }
        ]
    },
    {
        name: 'WiBX Day', icon: 'shop',
        links: [
            { name: 'direct-mail', url: 'promote/direct-mail' },
            { name: 'push', url: 'promote/push' }
        ]
    }
];

@Component({
    templateUrl: './dashboard-main.component.html',
    styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
    navList;

    constructor() { }

    ngOnInit() {
        this.navList = navList;
    }

}
