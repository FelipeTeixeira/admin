import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductRegisterModalComponent } from './product-register-modal/product-register-modal.component';

@Component({
    templateUrl: './product-register.component.html',
    styleUrls: ['./product-register.component.scss']
})
export class ProductRegisterComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ProductRegisterModalComponent, {
            width: '500px',
            data: { }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
