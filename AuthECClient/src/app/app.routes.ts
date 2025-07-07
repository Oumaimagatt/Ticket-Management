
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './dashboard/user-management/user-management.component';
import { TicketManagementComponent } from './dashboard/ticket-management/ticket-management.component';
import { UserListComponent } from './dashboard/user-management/user-list/user-list.component';
import { AuthGuard } from './shared/services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },

  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'signup', component: RegistrationComponent },
      { path: 'signin', component: LoginComponent },
    ]
  },

  // Authenticated routes with layout
  {
    path: '',
    component: MainComponent, // layout wrapper with header/sidebar
    // canActivate: [AuthGuard], // optional guard
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: 'user-management',
            component: UserManagementComponent,
            children: [
              { path: '', component: UserListComponent
              } 
            ]
          },
          {
            path: 'ticket-management',
            component: TicketManagementComponent
          }
        ]
      }
    ]
  }
];

