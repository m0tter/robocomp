import { Routes, RouterModule } from '@angular/router';

import { SetupEventComponent } from './events/setup-event.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { SetupSchoolComponent } from './schools/setup-school.component';
import { EditSchoolsComponent } from './schools/edit-schools/edit-schools.component';
import { NewSchoolComponent } from './schools/new-school/new-school.component';
import { UsersComponent } from './users/users.component';

const SETUP_ROUTES: Routes = [
  { path: 'setup/events', component: SetupEventComponent },
  { path: 'setup/schools', component: SetupSchoolComponent },
  { path: 'setup/events/detail/:id', component: EventDetailComponent }, 
  { path: 'setup/schools/edit/:id', component: EditSchoolsComponent},
  { path: 'setup/schools/new', component: NewSchoolComponent },
  { path: 'setup/users', component: UsersComponent }
]

export const SetupRoutes = RouterModule.forRoot(SETUP_ROUTES);