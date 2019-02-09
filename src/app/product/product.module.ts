import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductRegisterModalComponent } from './product-register/product-register-modal/product-register-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductRegisterComponent,
        ProductRegisterModalComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule
    ],
    entryComponents: [
        ProductRegisterModalComponent
    ]
})
export class ProductModule { }
