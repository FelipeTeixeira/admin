import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

// APENAS TESTE
export interface Booking {
    product: string;
    client: string;
    booking: string;
    date: string;
    valueReturned: number;
    status: string;
}

const TABLE_DATA: Booking[] = [
    {
        product: 'iPhone', client: 'Felipe Teixeira', booking: '110',
        date: '18/02/2019', valueReturned: 1000, status: 'open'
    },
    {
        product: 'Samsung', client: 'Mateus Santos', booking: '130',
        date: '16/02/2019', valueReturned: 500, status: 'finalized'
    }
];
// APENAS TESTE


@Component({
    selector: 'app-store-booking-table',
    templateUrl: './store-booking-table.component.html',
    styleUrls: ['./store-booking-table.component.scss']
})
export class StoreBookingTableComponent implements OnInit {

    displayedColumns: string[] = ['product', 'client', 'booking', 'date', 'valueReturned', 'status', 'actions'];
    dataSource = new MatTableDataSource<Booking>(TABLE_DATA);
    selection = new SelectionModel<Booking>(true, []);
    selected;

    constructor() { }

    ngOnInit() {
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
