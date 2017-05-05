import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Location } from '@angular/common';
import { School, Team } from 'robocomp';

import 'rxjs/add/operator/switchMap';

import { SetupSchoolService } from '../../../services/setup-school.service';

@Component({
  selector: 'app-edit-schools',
  templateUrl: './edit-schools.component.html',
  styleUrls: ['./edit-schools.component.scss']
})
export class EditSchoolsComponent implements OnInit {
    private school: School;
    private newSchool: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private setupSchoolService: SetupSchoolService,
    private http: Http

  ) { }

goBack(){
  this.location.back();
}

cancelSchool_Clicked(): void{
  this.goBack();
}

saveSchool_Clicked(): void{
if (this.newSchool){
  this.setupSchoolService.newSchool(this.school)
  .then(resp => {this.goBack();})
} else {
    this.setupSchoolService.editSchool(this.school)
    .then(resp => {this.goBack();})
  }
}

addTeam_Clicked(): void {
  let newteam: Team = {name: '', isCurrent: true, memberCount: 0}
  this.school.teams.push(newteam);
}

  ngOnInit():void {
    this.route.params
    .switchMap((params: Params) => {
      if(params['id'] !== '0') {
        this.newSchool = false;
        return this.setupSchoolService.getSchoolById(params['id'])
      } else{
        let school: School = {
          name: '', 
          contactEmail: '',
          contactName: '',
          contactNumber: '',
          _id: '',
          address: '',
          teams: [],
          isCurrent: true
        }
        this.newSchool  = true;
        return Promise.resolve(school);
      }
    })
.subscribe(school => {this.school = <School>school; console.log('newschool: ' + this.newSchool)});
  }
  

}

