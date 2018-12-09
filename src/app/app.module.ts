import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./error/error.component";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { HomeComponent } from './home/home.component';
import { RoleComponent  } from './role/role.component';
import { ProfileComponent } from './profile/profile.component';

import { SecurityComponent } from './security/security.component';

import { PermissionComponent } from './permission/permission.component';
import { AddPermissionComponent } from './add-permission/add-permission.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    CustomersComponent,
    AddcustomerComponent,
    HomeComponent,
    RoleComponent,
    SecurityComponent,
    ErrorComponent,
    PermissionComponent,
    ProfileComponent,
    AddPermissionComponent
  ],
  entryComponents: [RoleComponent, CustomersComponent,AddPermissionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
