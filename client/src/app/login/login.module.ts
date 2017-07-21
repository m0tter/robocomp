import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdCardModule, MdInputModule, MdChipsModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdChipsModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }