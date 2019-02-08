import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

// APENAS TESTE
export interface ProductInterface {
    product: string;
    quantity: number;
    value: number;
    sold: number;
    assessments: string;
    visible: boolean;
    date: string;
}

const TABLE_DATA: ProductInterface[] = [
    { product: 'Celular', quantity: 10, value: 1500, sold: 4, assessments: 'assessments', visible: true, date: '25/03/2019' },
    { product: 'iPhone', quantity: 30, value: 1900, sold: 3, assessments: 'assessments', visible: true, date: '25/03/2019' },
    { product: 'Samsung', quantity: 25, value: 700, sold: 10, assessments: 'assessments', visible: true, date: '25/03/2019' }
];
// APENAS TESTE

@Component({
    selector: 'app-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
    @Input() hideActions = false;

    displayedColumns: string[] = ['select', 'product', 'quantity', 'value', 'sold', 'assessments', 'visible', 'date', 'actions'];

    dataSource = new MatTableDataSource<ProductInterface>(TABLE_DATA);
    selection = new SelectionModel<ProductInterface>(true, []);
    selected;

    constructor() { }

    ngOnInit() {
        if (this.hideActions) {
            this.displayedColumns.pop();
        }
    }


    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        this.selected = numRows;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
}
