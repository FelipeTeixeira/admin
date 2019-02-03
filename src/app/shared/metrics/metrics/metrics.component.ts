import { Component, OnInit } from '@angular/core';

const metricsList = [
    { name: 'Total de Clientes', val: '2547', percentage: '77%', icon: 'users', isUp: true },
    { name: 'Total de vendas', val: '3.427,00', percentage: '6', icon: 'buy', isDown: true },
    { name: 'Total de compartilhamentos', val: '2.547.251', percentage: '75%', icon: 'shared', isUp: true },
    { name: 'Receita em WiBX', val: '890,50', percentage: '12%', icon: 'dollar', isDown: true },
    { name: 'Saldo em WiBX', val: '1.547.234', percentage: null, icon: 'wallet', totalWibx: '2.547.234' },
];

@Component({
    selector: 'app-metrics',
    templateUrl: './metrics.component.html',
    styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
    metricsList;

    constructor() { }

    ngOnInit() {
        this.metricsList = metricsList;
    }

}





