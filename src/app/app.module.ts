import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrimeModule } from './prime-template/prime/prime.module';
import { HeaderMenuComponent } from './core/header-menu/header-menu.component';
import { ViewComponent } from './pages/view/view.component';
import { AboutComponent } from './components/about/about.component';
import { PostComponent } from './components/post/post.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactComponent } from './components/contact/contact.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { FaqComponent } from './components/faq/faq.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AccordionComponent } from './shared/components/accordion/accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    ViewComponent,
    AboutComponent,
    PostComponent,
    FeedbackComponent,
    ContactComponent,
    SideBarComponent,
    FaqComponent,
    AppointmentComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    PrimeModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
