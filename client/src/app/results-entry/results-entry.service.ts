import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable, Subscription } from 'rxjs';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise'

import { AuthenticationService } from '../services/authentication.service';
import { CompBase, RoboEvent } from 'robocomp';
import { RobocompService } from '../services';
import { API_RESULTS_ENTRY } from '../_api.paths';
import { NavService } from '../services/nav.service';


@Injectable()
export class ResultsEntryService {
    private options: RequestOptions;

    constructor (
        private http: Http,
        private authService: AuthenticationService ) 
    { 
        this.options = this.authService.httpOptions();
    }

}