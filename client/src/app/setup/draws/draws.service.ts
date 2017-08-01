import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise'

import { AuthenticationService } from '../../services/authentication.service';
import { RoboEvent } from 'robocomp';
import { API_EVENT } from '../../_api.paths';
import { NavService } from '../../services';
import { SetupService } from '../setup.service';

@Injectable()
  export class DrawsService {
    private options: RequestOptions;

    constructor(private http: Http,
                private authService: AuthenticationService,
                private navService: NavService,
                private setupService: SetupService
               ){
                  this.options = this.authService.httpOptions();
                  this.setupService.setupNav();
                }
  }

