import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { MaterialModule } from './material/material.module';
import { EngagementTableComponent } from './engagement-table/engagement-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCoverComponent } from './image-cover/image-cover.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

@NgModule({
    declarations: [
        ProductTableComponent,
        EngagementTableComponent,
        ImageCoverComponent,
        BreadcrumbsComponent,
        UploadComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ProductTableComponent,
        EngagementTableComponent,
        ImageCoverComponent,
        BreadcrumbsComponent,
        UploadComponent
    ]
})
export class SharedModule { }
