import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FidelityEngagementModalAddComponent } from './fidelity-engagement-modal-add/fidelity-engagement-modal-add.component';

@Component({
    templateUrl: './fidelity-engagement.component.html'
})
export class FidelityEngagementComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    openEngagementModalAdd(): void {
        const dialogRef = this.dialog.open(FidelityEngagementModalAddComponent, {
            width: '500px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
