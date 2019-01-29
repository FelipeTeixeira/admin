import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorePersonalizeComponent } from './store-personalize/store-personalize.component';
import { StoreUnitsComponent } from './store-units/store-units.component';
import { StorePermissionsComponent } from './store-permissions/store-permissions.component';
import { StoreBookingComponent } from './store-booking/store-booking.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'personalize',
                component: StorePersonalizeComponent
            },
            {
                path: 'units',
                component: StoreUnitsComponent
            },
            {
                path: 'permissions',
                component: StorePermissionsComponent
            },
            {
                path: 'booking',
                component: StoreBookingComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule { }
