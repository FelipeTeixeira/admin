import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: 'store', loadChildren: './store/store.module#StoreModule' },
    { path: 'product', loadChildren: './product/product.module#ProductModule' },
    { path: 'active', loadChildren: './active/active.module#ActiveModule' },
    { path: 'fidelity', loadChildren: './fidelity/fidelity.module#FidelityModule' },
    { path: 'promote', loadChildren: './promote/promote.module#PromoteModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


