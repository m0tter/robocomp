import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetupSchoolService } from '../../services';
import { School } from 'robocomp'

interface school extends School {
  selected: boolean;
} 

@Component({
  selector: 'setup-school',
  templateUrl: 'setup-school.component.html',
  styleUrls: ['setup-school.component.scss']
})

export class SetupSchoolComponent implements OnInit{
  private schools: school[];
  private selectedSchool: School;
  private editDisabled = true;
  private deleteDisabled = true;

  constructor(private router: Router, private setupSchoolService: SetupSchoolService,){}

getSchools(){
  this.setupSchoolService.getSchool()
  .then(resp => this.schools = resp as school[])
  .catch(err => this.errorHandler(err));
}

btnNew_Clicked():void {
  this.router.navigate(['setup/schools/edit/0']);
}

btnEdit_Clicked():void {
  console.log("seleted School", JSON.stringify(this.selectedSchool));
  this.router.navigate(["/setup/schools/edit/", this.selectedSchool._id]);
}

btnDelete_Clicked():void {
  for (let s of this.schools){
    if(s.selected)this.deleteSchool(s, (cb: void) => {this.checkButtons(); });
  }
}

schoolSelect_Clicked($index: number) {
  this.schools[$index].selected = !this.schools[$index].selected;
  this.checkButtons();
}

checkButtons(): void {
    this.editDisabled = true;
    this.deleteDisabled = true;

    let schools = this.schools.filter(school => school.selected === true)

    if (schools.length === 1){
        this.editDisabled = false;
        this.selectedSchool = schools[0];
    } 
    if (schools.length > 0 ) this.deleteDisabled = false;
}

deleteSchool(school: school, cb?: Function):void {
  this.setupSchoolService.deleteSchool(school)
  .then(res => {if (res) this.schools.splice(this.schools.indexOf(school), 1); if (cb) cb(); })
  .catch(err => this.errorHandler(err));
}

ngOnInit(){
  this.getSchools();
}

private errorHandler(error: any){
    console.error('whoops it\'s all gone pear shaped');
    }
}