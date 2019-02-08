import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';

import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRegisterModalComponent } from './product-register/product-register-modal/product-register-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductRegisterComponent,
        ProductListComponent,
        ProductRegisterModalComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        FormsModule,
        SharedModule
    ],
    entryComponents: [
        ProductRegisterModalComponent
    ]
})
export class ProductModule { }
