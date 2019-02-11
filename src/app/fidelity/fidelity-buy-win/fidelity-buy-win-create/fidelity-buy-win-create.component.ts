import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/breadcrumbs/breadcrumb.interface';

@Component({
    templateUrl: './fidelity-buy-win-create.component.html',
})
export class FidelityBuyWinCreateComponent implements OnInit {
    listBreadcrumb: Breadcrumb[] = [
        { name: 'Lista de Cupons', url: '/fidelity/buy-win/create' },
        { name: 'Criar Programa' }
    ];

    // PRODUCT TABLE
    displayedCustom: string[] = ['select', 'product', 'quantity', 'value', 'rating', 'sold'];

    constructor() { }

    ngOnInit() {
    }

}
