import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [
        ProductTableComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        ProductTableComponent,
        MaterialModule
    ]
})
export class SharedModule { }
