import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatStepperModule } from '@angular/material/stepper';
import { ActiveRoutingModule } from './active-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ActiveAccessListComponent } from './active-access-list/active-access-list.component';
import { ActiveCreateProgramComponent } from './active-access-list/active-create-program/active-create-program.component';
import { ActiveListProgramComponent } from './active-access-list/active-list-program/active-list-program.component';

@NgModule({
    declarations: [
        ActiveAccessListComponent,
        ActiveCreateProgramComponent,
        ActiveListProgramComponent
    ],
    imports: [
        CommonModule,
        ActiveRoutingModule,
        SharedModule,
        MatStepperModule
    ]
})
export class ActiveModule { }
