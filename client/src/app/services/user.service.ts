import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

import { AuthenticationService } from './authentication.service';
import { User } from '../../../../common/robocomp';
import { API_USER } from '../_api.paths';

@Injectable()
export class UserService {
  private options: RequestOptions;

  constructor (
    private http: Http,
    private authService: AuthenticationService
  ) { this.options = this.authService.httpOptions(); }

  getUsers(): Observable<User[]> {
    return this.http.get(API_USER, this.options)
      .map((response: Response) => response.json())
      .catch((err) => this.errorHandler(err));
      
  }

  myGetUser(): Promise<User[]> {
    return this.http.get(API_USER, this.options)
      .toPromise()
      .then( resp => { return resp.json().data as User[]})
      .catch( err => { return this.errorHandler(err)});
  }

  private errorHandler(error: any): Promise<any> {
    // TODO: do something here
    return Promise.reject("it's broken :(");
  }
}