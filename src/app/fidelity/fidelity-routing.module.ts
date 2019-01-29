import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FidelityEngagementComponent } from './fidelity-engagement/fidelity-engagement.component';
import { FidelityBuyWinComponent } from './fidelity-buy-win/fidelity-buy-win.component';
import { FidelityCuponsComponent } from './fidelity-cupons/fidelity-cupons.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'engagement',
                component: FidelityEngagementComponent
            },
            {
                path: 'buy-win',
                component: FidelityBuyWinComponent
            },
            {
                path: 'cupons',
                component: FidelityCuponsComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FidelityRoutingModule { }
