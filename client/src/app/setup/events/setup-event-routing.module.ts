import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupEventComponent } from './setup-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  { path: '', component: SetupEventComponent },
  { path: 'detail/:id', component: EventDetailComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupEventRoutingModule { }