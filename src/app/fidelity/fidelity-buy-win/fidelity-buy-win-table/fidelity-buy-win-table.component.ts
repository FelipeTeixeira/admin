import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

// APENAS TESTE
export interface Cupom {
    cupom: string;
    date: string;
    qty: number;
}

const TABLE_DATA: Cupom[] = [
    { cupom: 'Cupom - 1', date: '25/03/2019', qty: 10 },
    { cupom: 'Cupom - 2', date: '22/04/2019', qty: 3 },
    { cupom: 'Cupom - 3', date: '21/05/2019', qty: 7 },
];
// APENAS TESTE

@Component({
    selector: 'app-fidelity-buy-win-table',
    templateUrl: './fidelity-buy-win-table.component.html',
})

export class FidelityBuyWinTableComponent implements OnInit {
    displayedColumns: string[] = ['select', 'cupom', 'qty', 'date', 'actions'];

    dataSource = new MatTableDataSource<Cupom>(TABLE_DATA);
    selection = new SelectionModel<Cupom>(true, []);
    selected;

    constructor() { }

    ngOnInit() {
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        this.selected = numRows;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
}
