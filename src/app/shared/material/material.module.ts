import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatTabsModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatCheckboxModule,
        MatCardModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatRadioModule,
        MatTabsModule
    ]
})
export class MaterialModule { }
