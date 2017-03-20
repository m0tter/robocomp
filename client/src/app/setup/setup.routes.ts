import { Routes, RouterModule } from '@angular/router';

import { SetupEventComponent } from './events/setup-event.component';
import { SetupSchoolComponent } from './schools/setup-school.component';

const SETUP_ROUTES: Routes = [
  { path: 'setup/events', component: SetupEventComponent },
  { path: 'setup/schools', component: SetupSchoolComponent } 
]

export const SetupRoutes = RouterModule.forRoot(SETUP_ROUTES);