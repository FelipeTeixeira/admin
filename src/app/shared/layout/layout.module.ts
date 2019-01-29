import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SvgComponent } from './svg/svg.component';

@NgModule({
    declarations: [
        HeaderComponent,
        MenuComponent,
        SvgComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        SvgComponent
    ]
})
export class LayoutModule { }
