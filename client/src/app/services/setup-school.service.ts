import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';

@Injectable ()
export class SetupSchoolService {
    private options: RequestOptions;

    constructor(private http: Http)
    {}

}