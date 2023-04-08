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
import { ViewComponent } from './pages/view/view.component';

const routes: Routes = [
  { path: 'view', component: ViewComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'appointment', component: AppointmentComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'feedback', component: FeedbackComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'contact', component: ContactComponent },
  { path: 'feedbacks', component: FeedbackComponent },
  { path: 'login', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
