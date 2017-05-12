import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
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
  public loginTimedOut = false;

  constructor( private http: Http, private router: Router ){
    let local = localStorage.getItem('roboUser');
    if(local) {
      let user = JSON.parse(local);
      this.token = user.token;
    }
  }

  login(email: string, password: string): Promise<LoginResult> {
    let headers = new Headers({ 'Content-Type':'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log('json: ' + JSON.stringify({email: email, password: password}));
    return this.http.post(API_AUTH, JSON.stringify({email: email, password: password}), options)
      .toPromise()
      .then((response: Response) => {
        let json = response.json();
        if(json.success) {
          this.token = json.data;
          localStorage.setItem( 'roboUser', JSON.stringify({ email: email, token: this.token }));
          // login succeded
          return Promise.resolve(LoginResult.success);
        } else {
          // login failed
          return Promise.resolve(LoginResult.failed);
        }
      })
      .catch((response: Response) => {
        console.log('catch response: ' + JSON.stringify(response));
        return Promise.reject(LoginResult.serverError);
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('roboUser');
  }

  timeout(): void {
    this.logout();
    this.loginTimedOut = true;
    this.router.navigate(['/login']);
  }

  httpOptions(): RequestOptions {
    let headers = new Headers({ 'x-access-token': this.token });
    let options = new RequestOptions({ headers: headers });
    return options;
  }
}