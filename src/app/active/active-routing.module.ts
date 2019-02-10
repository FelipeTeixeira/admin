import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveAccessListComponent } from './active-access-list/active-access-list.component';
import { ActiveCreateProgramComponent } from './active-access-list/active-create-program/active-create-program.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ActiveAccessListComponent
            },
            {
                path: 'create',
                component: ActiveCreateProgramComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActiveRoutingModule { }
