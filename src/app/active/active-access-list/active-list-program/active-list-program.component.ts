import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

// APENAS TESTE
export interface Program {
    program: string;
    product: number;
    quantity: number;
    value: number;
    sold: number;
    rating: string;
    visible: boolean;
    img: string;
}

const TABLE_DATA: Program[] = [
    {
        program: 'Corinthians Epidemia', product: 4, quantity: 10, value: 1500, sold: 4, rating: 'rating', visible: true,
        img: 'https://http2.mlstatic.com/copo-long-drink-vidro-jateado-corinthians-epidemia-D_NQ_NP_467311-MLB20543391606_012016-F.jpg'
    },
    {
        program: 'República Popular do Corinthians ', product: 2, quantity: 30, value: 1900, sold: 3, rating: 'rating', visible: true,
        img: 'https://www.estadao.com.br/fotos/republica_reproducao_AE_292_2.jpg'
    }
];
// APENAS TESTE

@Component({
    selector: 'app-active-list-program',
    templateUrl: './active-list-program.component.html'
})
export class ActiveListProgramComponent implements OnInit {
    displayedColumns: string[] = ['select', 'program', 'product', 'member', 'sold', 'rating', 'visible', 'actions'];

    dataSource = new MatTableDataSource<Program>(TABLE_DATA);
    selection = new SelectionModel<Program>(true, []);
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
