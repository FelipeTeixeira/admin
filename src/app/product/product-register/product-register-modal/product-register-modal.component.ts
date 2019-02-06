import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-product-register-modal',
    templateUrl: './product-register-modal.component.html',
    styleUrls: ['./product-register-modal.component.scss']
})
export class ProductRegisterModalComponent implements OnInit {
    type;

    constructor(
        public dialogRef: MatDialogRef<ProductRegisterModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
