import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';

import { SetupEventComponent } from './setup-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SetupEventRoutingModule } from './setup-event-routing.module';
import { SetupEventService  } from './setup-event.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SetupEventRoutingModule,
    MdButtonModule
  ],
  declarations: [
    SetupEventComponent,
    EventDetailComponent
  ],
  providers: [
    SetupEventService
  ]
})
export class SetupEventModule { }