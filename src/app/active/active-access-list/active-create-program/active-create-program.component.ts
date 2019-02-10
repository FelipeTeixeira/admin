import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Breadcrumb } from 'src/app/shared/breadcrumbs/breadcrumb.interface';

@Component({
    templateUrl: './active-create-program.component.html',
    styleUrls: ['./active-create-program.component.scss']
})
export class ActiveCreateProgramComponent implements OnInit {
    listBreadcrumb: Breadcrumb[] = [
        { name: 'Acesso Exclusivo - Lista de Programas', url: '/active' },
        { name: 'Criar Programa' }
    ];

    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    // PRODUCT TABLE
    displayedCustom: string[] = ['select', 'product', 'quantity', 'value', 'discount'];

    constructor(private fm: FormBuilder) { }

    ngOnInit() {
        this.firstFormGroup = this.fm.group({
            // firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this.fm.group({
            // secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this.fm.group({
            // secondCtrl: ['', Validators.required]
        });
    }
}




