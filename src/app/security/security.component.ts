import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle} from '@angular/material';
import {isNullOrUndefined} from 'util';
import { SecurityModelService } from '../services/securityModel.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
  providers: [SecurityModelService]
})
export class SecurityComponent implements OnInit {
  securitymodels:[];
  displayedColumns: string[] = ['security_model_type', 'security_model_name'];
  dataSource = new MatTableDataSource<SecurityModel>(this.securitymodels);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private securityModelService: SecurityModelService){

  }

  ngOnInit() {
    this.fetchSecurityModelList();
  }
  /**
  * Calling user service with fectchUser()
  */
  fetchSecurityModelList() {
      this.securityModelService.fetchSecurityModels().subscribe(
        response => {
          var responseObj:any = response;
          if (!isNullOrUndefined(responseObj)) {
            this.securitymodels = responseObj;
          }
        },
        error => {
          console.log("response"+ this.securitymodels);

        });
    }
  }



  export interface SecurityModel {
  security_model_type: string;
  security_model_name: string;
  }
