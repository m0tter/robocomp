import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdButtonModule } from '@angular/material';

import { DrawsRoutingModule } from './draws-routing.module';
import { DrawsService } from './draws.service';
import { DrawsComponent } from './draws.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DrawsRoutingModule,
    MdButtonModule
  ],
  declarations: [
    DrawsComponent,
  ],
  providers: [
    DrawsService
  ]
})
export class DrawsModule { }