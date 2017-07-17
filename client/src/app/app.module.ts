import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutes }  from './app.routes';
import { SetupRoutes } from './setup/setup.routes';


import { NavService, AuthenticationService, UserService, RobocompService, SetupSchoolService } from './services';
import { SetupService, SetupEventService } from './services';
import { AuthGuard } from './guards';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ResultsEntryComponent } from './results-entry/results-entry.component';
import { SideNavComponent } from './side-nav';

import { SetupComponent } from './setup/setup.component';
import { SetupEventComponent } from './setup/events/setup-event.component';
import { SetupSchoolComponent } from './setup/schools/setup-school.component';
import { EventDetailComponent } from './setup/events/event-detail/event-detail.component';
import { EditSchoolsComponent } from './setup/schools/edit-schools/edit-schools.component';
import { NewSchoolComponent } from './setup/schools/new-school/new-school.component';
import { UsersComponent } from './setup/users/users.component';
import { UserDialogComponent } from './setup/users/user-dialog.component';
import { DrawsComponent } from './setup/draws/draws.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    ResultsEntryComponent,
    SetupComponent,
    SetupEventComponent,
    SetupSchoolComponent,
    SideNavComponent,
    EventDetailComponent,
    EditSchoolsComponent,
    NewSchoolComponent,
    UsersComponent,
    UserDialogComponent,
    DrawsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    SetupRoutes,
    MaterialModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    NavService,
    AuthenticationService,
    UserService,
    AuthGuard,
    RobocompService,
    SetupEventService,
    SetupSchoolService,
    SetupService
  ],
  bootstrap: [
    AppComponent  
  ],
  entryComponents: [
    UserDialogComponent
  ]
})
export class AppModule { }
