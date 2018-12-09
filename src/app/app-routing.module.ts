import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CustomersComponent } from "./customers/customers.component";
import { AddcustomerComponent } from "./addcustomer/addcustomer.component";
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from "./role/role.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'addCustomer', component: AddcustomerComponent },
  { path: 'roles', component: RoleComponent },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
