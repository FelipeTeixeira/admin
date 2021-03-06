import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductAddComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule
    ],
})
export class ProductModule { }
