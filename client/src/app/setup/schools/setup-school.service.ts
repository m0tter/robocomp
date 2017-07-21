import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthenticationService } from '../../services/authentication.service';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/toPromise';
import { School, Team } from 'robocomp';
import { API_SCHOOL } from '../../_api.paths';

@Injectable ()
export class SetupSchoolService {
    private options: RequestOptions;
    private School = '/src/api';

    constructor(private http: Http, private authService: AuthenticationService)
    {this.options = this.authService.httpOptions();}

getSchool(): Promise<School[]>{
    return this.http.get(API_SCHOOL, this.options)
    .toPromise()
    .then((response: Response) => response.json().data as School[])
    .catch(err => {return this.errorHandler(err)});

}

getSchoolById(id: string): Promise<School> {
return this.getSchool()
.then(schoolRes => schoolRes.find(schoolRes => schoolRes._id === id));
}

newSchool(school: School): Promise<School>{
    return this.http.post(API_SCHOOL, school, this.options)
    .toPromise()
    .then(resp => resp.json().data as School)
    .catch(err => this.errorHandler(err));
}

editSchool(school: School): Promise<School>{
return this.http.put(API_SCHOOL + "/" + school._id, school, this.options)
.toPromise()
.then(resp => resp.json().data as School)
.catch(err => this.errorHandler(err));
}

deleteSchool(school: School): Promise<boolean>{
    return this.http.delete(API_SCHOOL + "/" + school._id, this.options)
    .toPromise()
    .then( resp => {
        if(resp.json().data === school._id) return true; else return false;
    })
    .catch(err => this.errorHandler(err));
}

deleteTeam(Team: Team): Promise<boolean>{
    return this.http.delete(API_SCHOOL + "/" + Team._id, this.options)
    .toPromise()
    .then( resp => {
        if(resp.json().data === Team._id) return true; else return false;
    })
    .catch(err => this.errorHandler(err));
}

errorHandler(err: any): Promise<any>{
    return Promise.reject("Something Went Wrong Dingus" + err);
}
}