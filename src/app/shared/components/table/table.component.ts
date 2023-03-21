import { Component, OnInit, ViewChild } from '@angular/core';

import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { Customer, Representative } from '../../interfaces/shared.interface';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  customers: Customer[] = [];

  selectedCustomers: Customer[] = [];

  answerSet1: any[] = [];
  answerSet2: any[] = [];
  answerSet3: any[] = [];
  answerSet4: any[] = [];

  statuses: any[] = [];

  loading: boolean = true;

  @ViewChild('dt') table: any;

  constructor(
    private customerService: SharedService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      console.log(' this.customers==>', this.customers);
      this.loading = false;
    });

    this.answerSet1 = [
      'Yourself',
      'Your child',
      'Your spouse or partner',
      'Another relatiove or friend',
    ];
    this.answerSet2 = [
      'To ask for advice',
      'Because of ongoing problem',
      'for treatment(including prescriptions)',
      'Because of a one-off problem',
      'For a routine check',
      'Others',
    ];
    this.answerSet3 = ['1', '2', '3', '4', '5'];
    this.answerSet4 = [
      'Poor',
      'Less than satisfactory',
      'Satisfactory',
      'Good',
      'Very Good',
      'Does not apply',
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
    this.primengConfig.ripple = true;
  }

  onActivityChange(event: any) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onDateSelect(value: any) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }

  formatDate(date: any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  onRepresentativeChange(event: any) {
    this.table.filter(event.value, 'representative', 'in');
  }
}
