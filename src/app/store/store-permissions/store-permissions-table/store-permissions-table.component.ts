import { Component, OnInit, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

// APENAS TESTE
export interface Collaborator {
    collaborator: string;
    unity: string;
    city: string;
    state: string;
    permission: string;
}

const TABLE_DATA: Collaborator[] = [
    {
        collaborator: 'Felipe Teixeira', unity: 'Poderoso Timão Vila Matilde',
        city: 'São Paulo', state: 'São Paulo', permission: 'Administrador'
    },
    {
        collaborator: 'Rafael Peretta', unity: 'Poderoso Timão Tatuapé',
        city: 'São Paulo', state: 'São Paulo', permission: 'Gestor de Produtos'
    },
    {
        collaborator: 'João Salgado', unity: 'Poderoso Timão Center Vale',
        city: 'São José', state: 'São Paulo', permission: 'Gestor de Reservas'
    }
];
// APENAS TESTE

@Component({
    selector: 'app-store-permissions-table',
    templateUrl: './store-permissions-table.component.html'
})
export class StorePermissionsTableComponent implements OnInit {
    displayedColumns: string[] = ['collaborator', 'unity', 'city', 'state', 'permission', 'actions'];
    dataSource = new MatTableDataSource<Collaborator>(TABLE_DATA);
    selection = new SelectionModel<Collaborator>(true, []);
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
