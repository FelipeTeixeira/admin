import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FidelityRoutingModule } from './fidelity-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FidelityEngagementComponent } from './fidelity-engagement/fidelity-engagement.component';
import { FidelityBuyWinComponent } from './fidelity-buy-win/fidelity-buy-win.component';
import { FidelityCuponsComponent } from './fidelity-cupons/fidelity-cupons.component';
// tslint:disable-next-line:max-line-length
import { FidelityEngagementModalAddComponent } from './fidelity-engagement/fidelity-engagement-modal-add/fidelity-engagement-modal-add.component';

@NgModule({
    declarations: [
        FidelityEngagementComponent,
        FidelityBuyWinComponent,
        FidelityCuponsComponent,
        FidelityEngagementModalAddComponent
    ],
    imports: [
        CommonModule,
        FidelityRoutingModule,
        SharedModule
    ],
    entryComponents: [
        FidelityEngagementModalAddComponent
    ]
})
export class FidelityModule { }
