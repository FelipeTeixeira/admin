import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StorePersonalizeComponent } from './store-personalize/store-personalize.component';
import { StoreUnitsComponent } from './store-units/store-units.component';
import { StorePermissionsComponent } from './store-permissions/store-permissions.component';
import { StoreBookingComponent } from './store-booking/store-booking.component';

@NgModule({
  declarations: [StorePersonalizeComponent, StoreUnitsComponent, StorePermissionsComponent, StoreBookingComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
