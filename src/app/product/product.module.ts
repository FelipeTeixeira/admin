import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { ProductRoutingModule } from './product-routing.module';

import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRegisterModalComponent } from './product-register/product-register-modal/product-register-modal.component';
import { ProductRegisterTableComponent } from './product-register/product-register-table/product-register-table.component';

@NgModule({
    declarations: [
        ProductRegisterComponent,
        ProductListComponent,
        ProductRegisterModalComponent,
        ProductRegisterTableComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        FormsModule,
        MaterialModule
    ],
    entryComponents: [
        ProductRegisterModalComponent
    ]
})
export class ProductModule { }
