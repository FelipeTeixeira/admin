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
            {
                name: 'Dashboard', icon: 'dashboard',
                subMenu: [
                    { name: 'Principal', url: '' },
                    { name: 'Relatórios', url: 'dashboard/report' }
                ]
            },
            {
                name: 'Loja', icon: 'store',
                subMenu: [
                    { name: 'personalize', url: 'store/personalize' },
                    { name: 'units', url: 'store/units' },
                    { name: 'permissions', url: 'store/permissions' },
                    { name: 'booking', url: 'store/booking' }
                ]
            },
            {
                name: 'Produtos', icon: 'product', url: 'product'
            },
            {
                name: 'Ativar', icon: 'active', url: 'active'
            },
            {
                name: 'Fidelizar', icon: 'fidelity',
                subMenu: [
                    { name: 'engagement', url: 'fidelity/engagement' },
                    { name: 'buy-win', url: 'fidelity/buy-win' },
                ]
            },
            {
                name: 'Promover', icon: 'promote', url: 'promote'
            }
        ];
    }

    toggleMenu(index: number) {
        this.menuItens.filter(
            (menu, i) => i !== index && menu.isActive
        ).forEach(menu => menu.isActive = !menu.isActive);


        this.menuItens[index].isActive = !this.menuItens[index].isActive;
    }

}
