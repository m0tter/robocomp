import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { RescueEntryComponent } from './rescue-entry.component';
import { RescueEntryRoutingModule } from './rescue-entry-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MdButtonModule,
        MdCheckboxModule,
        RescueEntryRoutingModule
    ],
    declarations: [
        RescueEntryComponent
    ],
    providers: [  ]
})
export class RescueEntryModule { }