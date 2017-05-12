//Author: James
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise'

import { AuthenticationService } from './authentication.service';
import { RoboEvent } from 'robocomp';
import { API_EVENT } from '../_api.paths';
import { NavService } from './';


@Injectable()
export class SetupEventService {
    private setupNavComplete = false;
    private options: RequestOptions;

    constructor(private http: Http, private authService: AuthenticationService, private navService: NavService)
    {this.options = this.authService.httpOptions();}

    getEvents(): Promise<RoboEvent[]> {
        return this.http.get(API_EVENT, this.options)
            .toPromise()
            .then((response: Response) => response.json().data as RoboEvent[])
            .catch(err => {return this.errorHandler(err)});
    }

    getEventById(id: string): Promise<RoboEvent> {
        return this.getEvents()
        .then(events => events.find(events => events._id === id));
    }

    newEvent(roboEvent: RoboEvent): Promise<RoboEvent> {
        return this.http.post(API_EVENT, roboEvent, this.options)
        .toPromise()
        .then(resp => resp.json().data as RoboEvent)
        .catch(err => this.errorHandler(err));
    }

    editEvent(roboEvent: RoboEvent): Promise<RoboEvent> {
        return this.http.put(API_EVENT + "/" + roboEvent._id, roboEvent, this.options)
        .toPromise()
        .then(resp => resp.json().data as RoboEvent)
        .catch(err => this.errorHandler(err));
    }

    deleteEvent(roboEvent: RoboEvent): Promise<boolean>{
        return this.http.delete(API_EVENT + "/" + roboEvent._id, this.options)
        .toPromise()
        .then(resp => {
            if(resp.json().data === roboEvent._id) return true; else return false;
        })
        .catch(err => this.errorHandler(err));
    }

    setupNav(): void{
        if(!this.setupNavComplete){
            this.navService.show();
            this.navService.setNavItems([
            {
                name: 'Events',
                route: 'setup/events'
            },
            {
                name: 'Schools',
                route: 'setup/schools'
            }
            ]);
            this.setupNavComplete = true;
        }
    }

    errorHandler(err: any): Promise<any>{
        //TODO: finish error handler
        return Promise.reject("Something is broken in setup-event.service, here's your error:" + err);
    }
}

