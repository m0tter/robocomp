import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

import { AuthenticationService } from './authentication.service';
import { User } from 'robocomp';
import { API_USER } from '../_api.paths';

@Injectable()
export class UserService {
  private options: RequestOptions;

  constructor (
    private http: Http,
    private authService: AuthenticationService
  ) { this.options = this.authService.httpOptions(); }

  getUsers(): Promise<User[]> {
    return this.http.get(API_USER, this.options)
      .toPromise()
      .then((res) => {
        let json = res.json();
        if(json.success) return Promise.resolve(<User[]>json.data);
        else {
          this.errorHandler('error getting users: ' + json.data);
          return Promise.reject('error loading users, please check server logs');
        }
      })
      .catch((err) => this.errorHandler(err));   
  }

  editUser(user: User): Promise<User> {
    return this.http.put(API_USER + '/' + user._id, user, this.options)
      .toPromise()
      .then(res => {
        let json = res.json();
        if(json.success) return Promise.resolve(<User>json.data);
        else {
          this.errorHandler('error updating user: ' + json.data);
          return Promise.reject('error updating user, please check server logs.');
        }
       })
      .catch(err => this.errorHandler(err));
  }

  newUser(user: User): Promise<User> {
    return this.http.post(API_USER, user, this.options)
      .toPromise()
      .then((res) => {
        let json = res.json();
        if(json.success) return json.data as User;
        else {
          this.errorHandler('error creating new user: ' + json.data);
          return Observable.throw('error creating new user, please check server logs.')
        }
      })
      .catch(err => this.errorHandler(err));
  }

  myGetUser(): Promise<User[]> {
    return this.http.get(API_USER, this.options)
      .toPromise()
      .then( resp => { return resp.json().data as User[]})
      .catch( err => { return this.errorHandler(err)});
  }

  private errorHandler(error: any): Promise<any> {
    console.error('An error occurred in user.service', error.message || error);
    if(error.status === 401) this.authService.timeout();

    return Promise.reject("it's broken :(");
  }
}