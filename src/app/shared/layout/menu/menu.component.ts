import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    menuItens;

    constructor() { }

    ngOnInit() {
        this.menuItens = [
            { name: 'Dashboard', icon: 'dashboard' },
            { name: 'Loja', icon: 'store' },
            { name: 'Produtos', icon: 'product' },
            { name: 'Ativar', icon: 'active' },
            { name: 'Fidelizar', icon: 'fidelity' },
            { name: 'Promover', icon: 'promote' },
            { name: 'WiBX Day', icon: 'promote' }
        ];
    }

}
