import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { API_AUTH } from '../_api.paths';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor( private http: Http ){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(API_AUTH, JSON.stringify({username: username, password: password}))
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if( token ) {
          this.token = token;
          localStorage.setItem( 'currentUser', JSON.stringify({ username: username, password: password }));
          // login succeded
          return true;
        } else {
          // login failed
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}