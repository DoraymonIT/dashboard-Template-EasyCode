import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
// Modules de Angular Material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

// Components
import {AppComponent} from "./app.component";
import {DashboardEntryComponent} from './dashboard-entry/dashboard-entry.component';
import {FooterBarComponent} from './footer-bar/footer-bar.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ClientsComponent} from './dashboard-entry/clients/clients.component';
import {UsersComponent} from './dashboard-entry/users/users.component';
import {DashboardComponent} from './dashboard-entry/dashboard/dashboard.component';
import {AnalyticsComponent} from './dashboard-entry/analytics/analytics.component';
import {ShippingComponent} from './dashboard-entry/shipping/shipping.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardEntryComponent, FooterBarComponent, LoginPageComponent, ClientsComponent, UsersComponent, DashboardComponent, AnalyticsComponent, ShippingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
