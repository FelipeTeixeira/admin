import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoteRoutingModule } from './promote-routing.module';
import { PromotePublicityComponent } from './promote-publicity/promote-publicity.component';

@NgModule({
    declarations: [
        PromotePublicityComponent
    ],
    imports: [
        CommonModule,
        PromoteRoutingModule
    ]
})
export class PromoteModule { }
