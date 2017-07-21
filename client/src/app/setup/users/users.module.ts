import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdSelectModule, MdCheckboxModule, MdChipsModule } from '@angular/material';

import { UsersComponent } from './users.component';
import { UserDialogComponent } from './user-dialog.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './user.service'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdSelectModule,
    MdCheckboxModule,
    MdChipsModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    UserDialogComponent
  ],
  providers: [ UserService ]
})
export class UsersModule { }