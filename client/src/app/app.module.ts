import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdDialogModule, MdInputModule, MdCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDialogComponent } from './setup/users/user-dialog.component';

import { AuthenticationService, NavService } from './services';
import { AuthGuard } from './guards';

@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    UserDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MdButtonModule,
    MdDialogModule,
    MdInputModule,
    MdCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [ 
    AuthenticationService,
    NavService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ UserDialogComponent ]
})
export class AppModule { }
