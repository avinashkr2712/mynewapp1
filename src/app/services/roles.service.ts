import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from "../../environments/environment";

const ROLES_URL = environment.apiUrl + "/roles/";

@Injectable()
export class RolesService {
  constructor(private httpClient: HttpClient) {
  }

  fetchRoles() {
    return this.httpClient.get(ROLES_URL);
  }
}
