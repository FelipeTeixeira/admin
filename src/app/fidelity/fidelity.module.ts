import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FidelityRoutingModule } from './fidelity-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FidelityEngagementComponent } from './fidelity-engagement/fidelity-engagement.component';
import { FidelityBuyWinComponent } from './fidelity-buy-win/fidelity-buy-win.component';
import { FidelityCuponsComponent } from './fidelity-cupons/fidelity-cupons.component';

@NgModule({
    declarations: [
        FidelityEngagementComponent,
        FidelityBuyWinComponent,
        FidelityCuponsComponent
    ],
    imports: [
        CommonModule,
        FidelityRoutingModule,
        SharedModule
    ]
})
export class FidelityModule { }
