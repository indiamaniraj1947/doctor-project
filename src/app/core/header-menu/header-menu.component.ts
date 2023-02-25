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
  ngOnInit(): void {}
  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
  toAppointment() {
    document
      .getElementById('appointment')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
  toPost() {
    document.getElementById('post')?.scrollIntoView({ behavior: 'smooth' });
  }
  toFeedback() {
    document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' });
  }
  toFAQ() {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
  }
  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
