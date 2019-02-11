import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

// APENAS TESTE
export interface Product {
    product: string;
    quantity: number;
    value: number;
    sold: number;
    rating: string;
    visible: boolean;
    date: string;
    discount?: number;
}

const TABLE_DATA: Product[] = [
    { product: 'Tablet', quantity: 10, value: 1500, sold: 4, rating: 'rating', visible: true, date: '25/03/2019' },
    { product: 'iPhone XR', quantity: 10, value: 1900, sold: 3, rating: 'rating', visible: true, date: '25/03/2019' },
    { product: 'Samsung S8', quantity: 15, value: 700, sold: 10, rating: 'rating', visible: true, date: '25/03/2019' },
    { product: 'Xiaomi', quantity: 20, value: 1500, sold: 4, rating: 'rating', visible: true, date: '25/03/2019' },
    { product: 'iPhone 7', quantity: 12, value: 1900, sold: 3, rating: 'rating', visible: true, date: '25/03/2019' },
    { product: 'Samsung S9', quantity: 12, value: 700, sold: 10, rating: 'rating', visible: true, date: '25/03/2019' }
];
// APENAS TESTE

@Component({
    selector: 'app-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
    @Input() hideActions = false;
    @Input() displayedCustom: string[];
    @Input() hideBulkActions = false;

    displayedColumns: string[] = ['select', 'product', 'quantity', 'value', 'sold', 'rating', 'visible', 'date', 'actions'];

    dataSource = new MatTableDataSource<Product>(TABLE_DATA);
    selection = new SelectionModel<Product>(true, []);
    selected;

    constructor() { }

    ngOnInit() {
        if (this.hideActions) {
            this.displayedColumns.pop();
        }

        if (this.displayedCustom) {
            this.displayedColumns = this.displayedCustom;
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
