import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Breadcrumb } from 'src/app/shared/breadcrumbs/breadcrumb.interface';

@Component({
    templateUrl: './fidelity-buy-win-create-program.component.html',
    styleUrls: ['./fidelity-buy-win-create-program.component.scss']
})
export class FidelityBuyWinCreateProgramComponent implements OnInit {
    listBreadcrumb: Breadcrumb[] = [
        { name: 'Lista de Programas', url: '/aircraft-info/manufacturer' },
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




