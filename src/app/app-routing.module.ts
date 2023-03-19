import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddEditFeedbackComponent } from './components/add-edit-feedback/add-edit-feedback.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FaqComponent } from './components/faq/faq.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: AddEditFeedbackComponent },
  { path: 'dashboard', component: DashboardComponent },
];
// const routerOptions: ExtraOptions = {
//   scrollPositionRestoration: 'enabled',
//   anchorScrolling: 'enabled',
//   scrollOffset: [0, 64],
// };
//[RouterModule.forRoot(routes, routerOptions)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
