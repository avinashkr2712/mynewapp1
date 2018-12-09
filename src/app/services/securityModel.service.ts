import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from "../../environments/environment";

const SECURITY_URL = environment.apiUrl + "/securitymodels/";

@Injectable()
export class SecurityModelService {
  constructor(private httpClient: HttpClient) {
  }

  fetchSecurityModels() {
    return this.httpClient.get(SECURITY_URL);
  }
}
