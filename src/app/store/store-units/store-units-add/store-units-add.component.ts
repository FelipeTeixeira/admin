import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/breadcrumbs/breadcrumb.interface';

@Component({
    selector: 'app-store-units-add',
    templateUrl: './store-units-add.component.html',
    styleUrls: ['./store-units-add.component.scss']
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
