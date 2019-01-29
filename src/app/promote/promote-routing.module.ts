import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotePublicityComponent } from './promote-publicity/promote-publicity.component';
import { PromoteDirectMailComponent } from './promote-direct-mail/promote-direct-mail.component';
import { PromotePushComponent } from './promote-push/promote-push.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'publicity',
                component: PromotePublicityComponent
            },
            {
                path: 'direct-mail',
                component: PromoteDirectMailComponent
            },
            {
                path: 'push',
                component: PromotePushComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PromoteRoutingModule { }
