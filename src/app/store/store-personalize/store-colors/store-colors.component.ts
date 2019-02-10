import { Component, OnInit } from '@angular/core';

export interface Food {
    value: string;
    viewValue: string;
}


@Component({
    selector: 'app-store-colors',
    templateUrl: './store-colors.component.html',
    styleUrls: ['./store-colors.component.scss']
})
export class StoreColorsComponent implements OnInit {
    colors: string[] = ['black', 'red', 'green', 'yellow', 'blue', 'orange'];

    constructor() { }

    ngOnInit() {
    }

}
