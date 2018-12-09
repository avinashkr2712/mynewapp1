import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { User } from "../models/user.model";
import {isNullOrUndefined} from 'util';
import { UserService } from "../services/user.service";
/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [UserService]
})
export class CustomersComponent implements OnInit {
  users:[];
  displayedColumns: string[] = ['email', 'firstName', 'lastName'];
  dataSource = new MatTableDataSource<User>(this.users);



  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService){

  }

  ngOnInit() {
    this.fetchUserList();
  }
/**
 * Calling user service with fectchUser()
 */
  fetchUserList() {
      this.userService.fetchUsers().subscribe(
        response => {
          var responseObj:any = response;
          if (!isNullOrUndefined(responseObj)) {
            this.users = responseObj;


          }
        },
        error => {
          console.log("response"+ this.users);

        });
    }
}



export interface User {
  email: string;
  firstName: string;
  lastName: string;
}
