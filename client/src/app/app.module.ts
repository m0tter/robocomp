import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthenticationService, NavService } from './services';
import { AuthGuard } from './guards';

@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MdButtonModule
  ],
  providers: [ 
    AuthenticationService,
    NavService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
