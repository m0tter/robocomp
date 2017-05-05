import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetupSchoolService } from '../../services';

@Component({
  selector: 'setup-school',
  templateUrl: 'setup-school.component.html',
  styleUrls: ['setup-school.component.scss']
})

export class SetupSchoolComponent {

  constructor(
    private router: Router
  ){}
  
newSchool():void {
  this.router.navigate(['setup/schools/edit/0']);
}
}