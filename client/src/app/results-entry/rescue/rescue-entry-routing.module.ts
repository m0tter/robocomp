import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RescueEntryComponent } from './rescue-entry.component';

const routes: Routes = [
    { path: '', component: RescueEntryComponent },
    { path: 'results-entry', loadChildren: '../results-entry' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RescueEntryRoutingModule { }