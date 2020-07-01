import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardEntryComponent } from './dashboard-entry/dashboard-entry.component';
import { ClientsComponent } from './dashboard-entry/clients/clients.component';
import { UsersComponent } from './dashboard-entry/users/users.component';
import { DashboardComponent } from './dashboard-entry/dashboard/dashboard.component';
import { AnalyticsComponent } from './dashboard-entry/analytics/analytics.component';
import { OrdersComponent } from './dashboard-entry/orders/orders.component';
import { ShippingComponent } from './dashboard-entry/shipping/shipping.component';
import { SettingsComponent } from './dashboard-entry/settings/settings.component';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardEntryComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        outlet: 'un',
      },
       {
        path: 'dash-board',
        component: DashboardComponent,
        outlet: 'un',
      },
       {
        path: 'clients',
        component: ClientsComponent,
        outlet: 'un',
      },
      {
        path: 'users',
        component: UsersComponent,
        outlet: 'un',
      }, {
        path: 'settings',
        component: SettingsComponent,
        outlet: 'un',
      }, {
        path: 'shipping',
        component: ShippingComponent,
        outlet: 'un',
      }, {
        path: 'orders',
        component: OrdersComponent,
        outlet: 'un',
      }, {
        path: 'analytics',
        component: AnalyticsComponent,
        outlet: 'un',
      },
    ]
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
