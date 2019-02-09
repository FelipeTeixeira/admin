import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductRegisterComponent } from './product-register/product-register.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProductRegisterComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
