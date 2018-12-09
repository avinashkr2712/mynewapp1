import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/users/";

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  fetchUsers() {
    return this.httpClient.get(BACKEND_URL);
  }
}
