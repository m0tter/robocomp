import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { SetupComponent } from './setup.component';
import { DrawsComponent } from './draws/draws.component';

const routes: Routes = [
  { path: '', component: SetupComponent},
  { path: 'events', loadChildren: './events/setup-event.module#SetupEventModule' },
  { path: 'schools', loadChildren: './schools/setup-school.module#SetupSchoolModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'draws', loadChildren: './draws/draws.module#DrawsModule' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
