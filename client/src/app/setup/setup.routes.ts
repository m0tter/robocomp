import { Routes, RouterModule } from '@angular/router';

import { SetupEventComponent } from './events/setup-event.component';
import { SetupSchoolComponent } from './schools/setup-school.component';
import { EditSchoolsComponent } from './schools/edit-schools/edit-schools.component';

const SETUP_ROUTES: Routes = [
  { path: 'setup/events', component: SetupEventComponent },
  { path: 'setup/schools', component: SetupSchoolComponent },
  { path: 'setup/schools/edit/:id', component: EditSchoolsComponent} 
]

export const SetupRoutes = RouterModule.forRoot(SETUP_ROUTES);