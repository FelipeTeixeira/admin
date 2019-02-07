import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveRoutingModule } from './active-routing.module';
import { ActiveAccessListComponent } from './active-access-list/active-access-list.component';

@NgModule({
    declarations: [
        ActiveAccessListComponent
    ],
    imports: [
        CommonModule,
        ActiveRoutingModule
    ]
})
export class ActiveModule { }
