import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';
import { User } from '../../../../common/robocomp';
import { API_USER } from '../_api.paths';

@Injectable()
export class UserService {
  
  constructor (
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  getUsers(): Observable<User[]> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(API_USER, options)
      .map((response: Response) => response.json());
  }
}