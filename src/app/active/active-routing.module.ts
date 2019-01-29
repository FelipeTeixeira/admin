import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveAccessListComponent } from './active-access-list/active-access-list.component';
import { ActiveRealityComponent } from './active-reality/active-reality.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ActiveAccessListComponent
            },
            {
                path: 'reality',
                component: ActiveRealityComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActiveRoutingModule { }
