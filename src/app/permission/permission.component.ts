import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle} from '@angular/material';
import {isNullOrUndefined} from 'util';
import { PermissionService } from '../services/permission.service';
import { AddPermissionComponent } from '../add-permission/add-permission.component';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css'],
  providers: [PermissionService]
})
export class PermissionComponent implements OnInit {
  permissions:[];
  per_name:string;
  displayedColumns: string[] = ['per_name'];
  dataSource = new MatTableDataSource<Permission>(this.permissions);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private permissionService: PermissionService, public dialog: MatDialog){

  }

  ngOnInit() {
    this.fetchPermissionList();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPermissionComponent, {
      width: '250px',
      data: {per_name: this.per_name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed  '+ result);
      this.per_name = result;
      this.addPermission(this.per_name);
    });
  }

  /**
  * Calling user service with fectchUser()
  */
  fetchPermissionList() {
      this.permissionService.fetchPermission().subscribe(
        response => {
          var responseObj:any = response;
          if (!isNullOrUndefined(responseObj)) {
            this.permissions = responseObj;
          }
        },
        error => {
          console.log("response"+ this.permissions);

        });
    }

    addPermission(per_name:string) {
      this.permissionService.addPermission(per_name).subscribe(
        response => {
          var responseObj:any = response;
          if (!isNullOrUndefined(responseObj)) {
            this.permissions = responseObj;
          }
        },
        error => {
          console.log("response"+ this.permissions);

        });
    }
  }



  export interface Permission {
  per_name: string;
  }
