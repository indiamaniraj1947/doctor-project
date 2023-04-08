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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ScrollDirective } from './directives/scroll.directive';
import { AddEditFeedbackComponent } from './components/add-edit-feedback/add-edit-feedback.component';
import { CrudService } from './services/crud.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { OptionFormComponent } from './shared/components/option-form/option-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxModule } from 'primeng/checkbox';
import { NgScrollbarModule, NG_SCROLLBAR_OPTIONS } from 'ngx-scrollbar';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TableComponent } from './shared/components/table/table.component';
import { MessageService } from 'primeng/api';
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
    ScrollDirective,
    AddEditFeedbackComponent,
    OptionFormComponent,
    DashboardComponent,
    SideNavComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    PrimeModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    CheckboxModule,
    NgScrollbarModule,
  ],
  providers: [CrudService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
