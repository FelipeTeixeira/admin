import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/breadcrumbs/breadcrumb.interface';

@Component({
    templateUrl: './store-units-add.component.html'
})
export class StoreUnitsAddComponent implements OnInit {
    listBreadcrumb: Breadcrumb[] = [
        { name: 'Lista de Unidades', url: '/store/units' },
        { name: 'Adicionar Unidade' }
    ];

    constructor() { }

    ngOnInit() {
    }

}
