import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StorePersonalizeComponent } from './store-personalize/store-personalize.component';
import { StoreUnitsComponent } from './store-units/store-units.component';
import { StorePermissionsComponent } from './store-permissions/store-permissions.component';
import { StoreBookingComponent } from './store-booking/store-booking.component';
import { SharedModule } from '../shared/shared.module';
import { StoreUnitsTableComponent } from './store-units/store-units-table/store-units-table.component';
import { StoreUnitsAddComponent } from './store-units/store-units-add/store-units-add.component';
import { StorePermissionsTableComponent } from './store-permissions/store-permissions-table/store-permissions-table.component';

@NgModule({
    declarations: [
        StorePersonalizeComponent,
        StoreUnitsComponent,
        StorePermissionsComponent,
        StoreBookingComponent,
        StoreUnitsTableComponent,
        StoreUnitsAddComponent,
        StorePermissionsTableComponent
    ],
    imports: [
        CommonModule,
        StoreRoutingModule,
        SharedModule
    ]
})
export class StoreModule { }
