import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
      },
      {
        label: 'About',
      },
      {
        label: 'Post',
      },
      {
        label: 'Feedback',
      },
      {
        label: 'Contact',
      },
      {
        icon: 'pi pi-facebook',
      },
      {
        icon: 'pi pi-twitter',
      },
      {
        icon: 'pi pi-instagram',
      },
    ];
  }
}
