import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveAccessListComponent } from './active-access-list/active-access-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ActiveAccessListComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActiveRoutingModule { }
