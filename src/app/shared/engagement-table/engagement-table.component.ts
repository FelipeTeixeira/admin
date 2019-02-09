import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

// APENAS TESTE
export interface Engagement {
    nameEngagement: string;
    like: number;
    shared: number;
    buy: number;
    status: string;
}

const TABLE_DATA: Engagement[] = [
    { nameEngagement: 'Celular', like: 10, shared: 1500, buy: 4, status: 'active' },
    { nameEngagement: 'iPhone', like: 30, shared: 1900, buy: 3, status: 'expired' },
    { nameEngagement: 'Samsung', like: 25, shared: 700, buy: 10, status: 'delete' }
];
// APENAS TESTE

@Component({
    selector: 'app-engagement-table',
    templateUrl: './engagement-table.component.html',
    styleUrls: ['./engagement-table.component.scss']
})
export class EngagementTableComponent implements OnInit {

    @Input() hideActions = false;

    displayedColumns: string[] = ['select', 'nameEngagement', 'like', 'shared', 'buy', 'actions'];

    dataSource = new MatTableDataSource<Engagement>(TABLE_DATA);
    selection = new SelectionModel<Engagement>(true, []);
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
