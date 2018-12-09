import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from "../../environments/environment";

const PERMISSION_URL = environment.apiUrl + "/permissions/";

@Injectable()
export class  PermissionService{
  constructor(private httpClient: HttpClient) {
  }

  fetchPermission() {
    return this.httpClient.get(PERMISSION_URL);
  }

  addPermission(per_name: string) {
    const obj = { "per_name": per_name };
    const myJSON = JSON.stringify(obj);
    return this.httpClient.post(
        PERMISSION_URL+'create',
        myJSON
      );
  }
}
