import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/shared/breadcrumbs/breadcrumb.interface';

@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
    listBreadcrumb: Breadcrumb[] = [
        { name: 'Lista de Produtos', url: '/product' },
        { name: 'Criar Programa' }
    ];
    constructor() { }

    ngOnInit() {
    }

}
