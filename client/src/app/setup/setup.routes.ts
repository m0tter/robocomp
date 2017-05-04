import { Routes, RouterModule } from '@angular/router';

import { SetupEventComponent } from './events/setup-event.component';
import { SetupSchoolComponent } from './schools/setup-school.component';
import { NewSchoolComponent } from './schools/new-school/new-school.component';
import { UsersComponent } from './users/users.component';

const SETUP_ROUTES: Routes = [
  { path: 'setup/events', component: SetupEventComponent },
  { path: 'setup/schools', component: SetupSchoolComponent },
  { path: 'setup/schools/new', component: NewSchoolComponent },
  { path: 'setup/users', component: UsersComponent }
]

export const SetupRoutes = RouterModule.forRoot(SETUP_ROUTES);