import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotePublicityComponent } from './promote-publicity/promote-publicity.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'publicity',
                component: PromotePublicityComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PromoteRoutingModule { }
