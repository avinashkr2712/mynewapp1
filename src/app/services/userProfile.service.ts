import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from "../../environments/environment";

const USER_PROFILE_URL = environment.apiUrl + "/userprofiles/";

@Injectable()
export class UserProfileService {
  constructor(private httpClient: HttpClient) {
  }

  fetchUserProfiles() {
    return this.httpClient.get(USER_PROFILE_URL);
  }
}
