import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MdButtonModule } from '@angular/material';
import { SetupSchoolComponent } from './setup-school.component';
import { EditSchoolsComponent } from './edit-schools/edit-schools.component';
import { NewSchoolComponent } from './new-school/new-school.component';
import { SetupSchoolService } from './setup-school.service';
import { SetupSchoolRoutingModule } from './setup-school-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SetupSchoolRoutingModule,
    FormsModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [
    SetupSchoolComponent,
    EditSchoolsComponent,
    NewSchoolComponent
  ],
  providers: [
    SetupSchoolService
  ]
})
export class SetupSchoolModule { }