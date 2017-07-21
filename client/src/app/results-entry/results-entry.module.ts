import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { ResultsEntryComponent } from './results-entry.component';
import { ResultsEntryRoutingModule } from './results-entry-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    ResultsEntryRoutingModule
  ],
  declarations: [
    ResultsEntryComponent
  ],
  providers: [ ]
})
export class ResultsEntryModule { }