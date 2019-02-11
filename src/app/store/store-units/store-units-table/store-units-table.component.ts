import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

// APENAS TESTE
export interface Unit {
    name: string;
    city: string;
    state: string;
    email: string;
    phone: string;
    rating: string;
    visible: boolean;
    img: string;
}

const TABLE_DATA: Unit[] = [
    {
        name: 'Poderoso Timão Vila Matilde', city: 'São Paulo - SP',
        state: 'São Paulo', email: 'timao.matilde@gmail.com',
        phone: '(11) 97054-4580',
        rating: 'rating', visible: true,
        img: 'assets/img/teste/poderoso-timao.jpg'
    },
    {
        name: 'Poderoso Timão Tatuapé', city: 'São Paulo - SP',
        state: 'São Paulo', email: 'timao.tatuape@gmail.com',
        phone: '(11) 2092-9335',
        rating: 'rating', visible: true,
        img: 'assets/img/teste/poderoso-timao.png'
    },
];
// APENAS TESTE

@Component({
    selector: 'app-store-units-table',
    templateUrl: './store-units-table.component.html'
})
export class StoreUnitsTableComponent implements OnInit {
    displayedColumns: string[] = [
        'select', 'name', 'city',
        'state', 'email', 'phone',
        'rating', 'visible', 'actions'
    ];

    dataSource = new MatTableDataSource<Unit>(TABLE_DATA);
    selection = new SelectionModel<Unit>(true, []);
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
