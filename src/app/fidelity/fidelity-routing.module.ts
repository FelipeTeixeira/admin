import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FidelityEngagementComponent } from './fidelity-engagement/fidelity-engagement.component';
import { FidelityBuyWinComponent } from './fidelity-buy-win/fidelity-buy-win.component';
import { FidelityBuyWinCreateComponent } from './fidelity-buy-win/fidelity-buy-win-create/fidelity-buy-win-create.component';

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
                component: FidelityBuyWinCreateComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FidelityRoutingModule { }
