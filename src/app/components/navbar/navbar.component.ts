// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

interface MenuItem {
  label: string;
  icon?: string;
  routerLink?: string;
  items?: MenuItem[];
  expanded?: boolean; // For submenu control
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule]
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  isMenuCollapsed = true; // For mobile menu toggle

  constructor() { }

    ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
      },
      {
        label: 'Sobre',
        routerLink: '/sobre',
      },
      {
        label: 'Serviços',
        items: [
          {
            label: 'Equoterapia',
            routerLink: '/equoterapia',
          },
          {
            label: 'Outros Serviços',
            routerLink: '/servicos',
          },
        ],
        expanded: false, // Initialize submenu as closed
      },
    ];
  }
    toggleSubmenu(item: MenuItem) {
        item.expanded = !item.expanded;
    }
}