import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupSchoolComponent } from './setup-school.component';
import { EditSchoolsComponent } from './edit-schools/edit-schools.component';
import { NewSchoolComponent } from './new-school/new-school.component';

const routes:Routes = [
  { path: '', component: SetupSchoolComponent },
  { path: 'edit/:id', component: EditSchoolsComponent},
  { path: 'new', component: NewSchoolComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupSchoolRoutingModule { }