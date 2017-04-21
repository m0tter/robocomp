import { Routes, RouterModule } from '@angular/router';

import { SetupEventComponent } from './events/setup-event.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { SetupSchoolComponent } from './schools/setup-school.component';

const SETUP_ROUTES: Routes = [
  { path: 'setup/events', component: SetupEventComponent },
  { path: 'setup/schools', component: SetupSchoolComponent },
  { path: 'setup/events/detail/:id', component: EventDetailComponent } 
]

export const SetupRoutes = RouterModule.forRoot(SETUP_ROUTES);