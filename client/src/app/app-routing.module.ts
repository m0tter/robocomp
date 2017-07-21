import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './guards';

// const APP_ROUTES: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'results-entry', component: ResultsEntryComponent, canActivate: [ AuthGuard ] },
//   { path: 'setup', component: SetupComponent, canActivate: [ AuthGuard ] }
// ]
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'setup', canActivate: [AuthGuard], runGuardsAndResolvers: 'always', loadChildren: './setup/setup.module#SetupModule' },
  //{ path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
  //{ path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }