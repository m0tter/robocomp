import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }     from './dashboard/dashboard.component';
import { LoginComponent }         from './login/login.component';
import { ResultsEntryComponent }  from './results-entry/results-entry.component';
import { SetupComponent }         from './setup/setup.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'results-entry', component: ResultsEntryComponent },
  { path: 'setup', component: SetupComponent }
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);