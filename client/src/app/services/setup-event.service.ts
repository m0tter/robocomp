//Author: James
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise'

import { AuthenticationService } from './authentication.service';
import { RoboEvent } from 'robocomp';
import { API_EVENT } from '../_api.paths';


@Injectable()
export class SetupService {
    private options: RequestOptions;

    constructor(private http: Http, private authService: AuthenticationService)
    {this.options = this.authService.httpOptions();}

    getEvents(): Promise<RoboEvent[]> {
        return this.http.get(API_EVENT, this.options)
            .toPromise()
            .then((response: Response) => response.json() as RoboEvent[])
            .catch(err => {return this.errorHandler(err)});
    }

    getEventById(id: string): Promise<RoboEvent> {
        return this.getEvents()
        .then(events => events.find(events => events._id === id));
    }

    errorHandler(error: any): Promise<any>{
        //TODO: finish error handler
        return Promise.reject("Something is broken, figure it out.")
    }
}

