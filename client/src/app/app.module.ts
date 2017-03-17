import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutes }  from './app.routes';

import { NavService, AuthenticationService, UserService, RobocompService } from './services';
import { AuthGuard } from './guards';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ResultsEntryComponent } from './results-entry/results-entry.component';
import { SetupComponent } from './setup/setup.component';
import { SideNavComponent } from './side-nav';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    ResultsEntryComponent,
    SetupComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    MaterialModule.forRoot()
  ],
  providers: [
    NavService,
    AuthenticationService,
    UserService,
    AuthGuard,
    RobocompService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
