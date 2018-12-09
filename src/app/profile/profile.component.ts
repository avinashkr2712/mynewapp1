import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle} from '@angular/material';
import {isNullOrUndefined} from 'util';
import { UserProfileService } from '../services/userProfile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserProfileService]
})
export class ProfileComponent implements OnInit {
  userProfiles:[];
  displayedColumns: string[] = ['user_profile_name', 'roles', 'security_model'];
  dataSource = new MatTableDataSource<UserProfile>(this.userProfiles);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userProfileService: UserProfileService){

  }

  ngOnInit() {
    this.fetchUserProfileList();
  }
  /**
  * Calling user service with fectchUser()
  */
  fetchUserProfileList() {
      this.userProfileService.fetchUserProfiles().subscribe(
        response => {
          var responseObj:any = response;
          if (!isNullOrUndefined(responseObj)) {
            this.userProfiles = responseObj;
          }
        },
        error => {
          console.log("response"+ this.userProfiles);

        });
    }
  }



  export interface UserProfile {
  user_profile_name: string;
  roles: object;
  security_model: object;
  }
