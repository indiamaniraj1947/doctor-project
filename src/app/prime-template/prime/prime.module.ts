import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    CalendarModule,
    TabViewModule,
    ListboxModule,
    SelectButtonModule,
    RadioButtonModule,
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    CalendarModule,
    TabViewModule,
    ListboxModule,
    SelectButtonModule,
    RadioButtonModule,
  ],
})
export class PrimeModule {}
