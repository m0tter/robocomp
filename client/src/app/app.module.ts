import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutes }  from './app.routes';
import { SetupRoutes } from './setup/setup.routes';

import { NavService, AuthenticationService, UserService, RobocompService} from './services';
import { SetupService } from './services';
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
import { NewSchoolComponent } from './setup/schools/new-school/new-school.component';

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
    NewSchoolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    SetupRoutes,
    MaterialModule.forRoot()
  ],
  providers: [
    NavService,
    AuthenticationService,
    UserService,
    AuthGuard,
    RobocompService,
    SetupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
