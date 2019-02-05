import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { MetricsComponent } from './metrics/metrics.component';

@NgModule({
    declarations: [
        MetricsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        MetricsComponent
    ]
})
export class MetricsModule { }
