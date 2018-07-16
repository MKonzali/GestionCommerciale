import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'client', title: 'Clients',  icon: 'pe-7s-user', class: '' },
    { path: 'user', title: 'Fournisseurs',  icon:'pe-7s-user', class: '' },
    { path: 'table', title: 'Commandes',  icon:'pe-7s-note2', class: '' },
    { path: 'typography', title: 'Livraison',  icon:'pe-7s-news-paper', class: '' },
  { path: 'notifications', title: 'Facturation',  icon:'pe-7s-note2', class: '' },
    { path: 'icons', title: 'Sourcing',  icon:'pe-7s-science', class: '' },
    { path: 'maps', title: 'Stock',  icon:'pe-7s-map-marker', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if (window.innerWidth > 991) {
          return false;
      }
      return true;
  }
}
