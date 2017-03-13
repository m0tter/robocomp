import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { API_AUTH } from '../_api.paths';

export enum LoginResult {
  success = 10,
  failed = 20,
  serverError = 30
}

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor( private http: Http ){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<LoginResult> {
    let headers = new Headers({ 'Content-Type':'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    console.log('json: ' + JSON.stringify({username: username, password: password}));
    return this.http.post(API_AUTH, JSON.stringify({username: username, password: password}), options)
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if( token ) {
          this.token = token;
          localStorage.setItem( 'currentUser', JSON.stringify({ username: username, password: password }));
          // login succeded
          return LoginResult.success;
        } else {
          // login failed
          return LoginResult.failed;
        }
      })
      .catch((response: Response) => {
        console.log('catch response: ' + JSON.stringify(response));
        return Observable.of(LoginResult.serverError);
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}