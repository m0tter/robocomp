import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MdButtonModule, 
  MdCheckboxModule,
  MdDialogModule,
  MdChipsModule } from '@angular/material';

import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup-routing.module';
import { SetupService } from './setup.service'; 

@NgModule({
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDialogModule,
    SetupRoutingModule
  ],
  declarations: [ 
    SetupComponent
  ],
  providers: [
    SetupService
  ]
})
export class SetupModule { }