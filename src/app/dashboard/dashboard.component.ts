import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: boolean = true;
  roles: boolean = false;
  securitymodels: boolean = false;
  customers: boolean = true;
  permissions: boolean=false;
  userprofiles: boolean=false;
  constructor(private activatedRoute: ActivatedRoute) {
    //this.data=this.activatedRoute.snapshot.params['id'];

  }
  ngOnInit() {
  }
  getCustomers(val) {
    this.users = false;
    this.roles = false;
    this.securitymodels = false;
    this.permissions=false;
    this.userprofiles=false;

    switch (val) {
      case "roles": {
        this.roles = !this.roles;
        break;
      }
      case "securitymodels": {
        this.securitymodels = !this.securitymodels
        break;
      }
      case "permissions": {
        this.permissions = !this.permissions;
        break;
      }
      case "userprofiles": {
        this.userprofiles = !this.userprofiles;
        break;
      }
      default: {
        this.users = !this.users;
        break;
      }
    }


  }

}
