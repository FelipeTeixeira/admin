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
                name: 'Produtos', icon: 'product',
                subMenu: [
                    { name: 'register', url: 'product/register' },
                    { name: 'list', url: 'product/list' }
                ]
            },
            {
                name: 'Ativar', icon: 'active',
                subMenu: [
                    { name: 'active', url: 'active' },
                    { name: 'reality', url: 'active/reality' }
                ]
            },
            {
                name: 'Fidelizar', icon: 'fidelity',
                subMenu: [
                    { name: 'engagement', url: 'fidelity/engagement' },
                    { name: 'buy-win', url: 'fidelity/buy-win' },
                    { name: 'cupons', url: 'fidelity/cupons' }
                ]
            },
            {
                name: 'Promover', icon: 'promote',
                subMenu: [
                    { name: 'publicity', url: 'promote/publicity' },
                    { name: 'direct-mail', url: 'promote/direct-mail' },
                    { name: 'push', url: 'promote/push' }
                ]
            },
            // { name: 'WiBX Day', icon: 'promote' }
        ];
    }

    toggleMenu(index: number) {
        this.menuItens.filter(
            (menu, i) => i !== index && menu.isActive
        ).forEach(menu => menu.isActive = !menu.isActive);


        this.menuItens[index].isActive = !this.menuItens[index].isActive;
    }

}
