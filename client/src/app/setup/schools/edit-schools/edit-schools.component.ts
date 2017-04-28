import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { School } from 'robocomp';

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
    private route: Router 

  ) { }

  ngOnInit():void {
    this.route.params
    .switchmap((params: Params) => {
      if(params['id'] !== '0') {
        this.newSchool = false;
        return this.SetupSchoolService.getSchool(params['id'])
      } else{
        let school: School = {
          name: '', 
          contactEmail: '',
          contactName: '',
          contactNumber: '',
          _id: '',
          address: '',
          isCurrent: true
        }
        this.newSchool  = true;
        return Promise.resolve(school);
      }
    })

  }
  

}

