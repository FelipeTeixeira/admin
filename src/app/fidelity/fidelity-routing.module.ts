import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FidelityEngagementComponent } from './fidelity-engagement/fidelity-engagement.component';
import { FidelityBuyWinComponent } from './fidelity-buy-win/fidelity-buy-win.component';
import { FidelityCuponsComponent } from './fidelity-cupons/fidelity-cupons.component';
// tslint:disable-next-line:max-line-length
import { FidelityBuyWinCreateProgramComponent } from './fidelity-buy-win/fidelity-buy-win-create-program/fidelity-buy-win-create-program.component';

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
                path: 'buy-win/create',
                component: FidelityBuyWinCreateProgramComponent
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
