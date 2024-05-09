import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'notifications', component: NotificationsPageComponent },
];

