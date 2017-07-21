import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Location } from '@angular/common';
import { School, Team } from 'robocomp';

import 'rxjs/add/operator/switchMap';

import { SetupSchoolService } from '../setup-school.service';

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
  let newteam: Team = {name: '', isCurrent: true, members: []};
  this.school.teams.push(newteam);
}

deleteTeam_Clicked($index, number){
this.school.teams.splice($index, 1);
}

  ngOnInit():void {
    this.route.params
    .switchMap((params: Params) => {
      if(params['id'] !== '0') {
        this.newSchool = false;
        let school = this.setupSchoolService.getSchoolById(params['id'])
        console.log('edit-schools:ngOnInit:schoolId=' + params['id']);
        console.log('edit-schools:ngOnInit:school=' + JSON.stringify(school));
        return school;
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

