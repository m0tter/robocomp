//Author: James
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise'

import { AuthenticationService, NavService } from '../services';
import { RoboEvent } from 'robocomp';
import { API_EVENT } from '../_api.paths';

@Injectable()
export class SetupService {
    private options: RequestOptions;
    private _isNavSetup = false;

    constructor (
        private http: Http, 
        private authService: AuthenticationService,
        private navService: NavService ) 
    {
        if(!this._isNavSetup) this.setupNav();
    }

    setupNav() {
        this.navService.show();
        this.navService.setNavItems([
            {
                name: 'Events',
                route: 'setup/events'
            },
            {
                name: 'Schools',
                route: 'setup/schools'
            },
            {
                name: 'Draws',
                route: 'setup/draws'
            },
            {
                name: 'Users',
                route: 'setup/users'
            }
        ]);
        this._isNavSetup = true;
    }

    errorHandler(error: any): Promise<any>{
        //TODO: finish error handler
        return Promise.reject("Something is broken, figure it out.")
    }
}

