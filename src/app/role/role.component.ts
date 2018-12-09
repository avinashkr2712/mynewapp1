import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle} from '@angular/material';
import {isNullOrUndefined} from 'util';
import { RolesService } from '../services/roles.service';



@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [RolesService]
})
export class RoleComponent implements OnInit {
  roles:[];
  displayedColumns: string[] = ['role_name', 'permissions'];
  dataSource = new MatTableDataSource<Role>(this.roles);



  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private rolesService: RolesService){

  }

  ngOnInit() {
    this.fetchRoleList();
  }
  /**
  * Calling user service with fectchUser()
  */
  fetchRoleList() {
      this.rolesService.fetchRoles().subscribe(
        response => {
          var responseObj:any = response;
          if (!isNullOrUndefined(responseObj)) {
            this.roles = responseObj;


          }
        },
        error => {
          console.log("response"+ this.roles);

        });
    }
  }



  export interface Role {
  role_name: string;
  permissions: object;
  }
