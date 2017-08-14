import{ NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsEntryComponent } from './results-entry.component';

const routes: Routes = [
  { path: '', component: ResultsEntryComponent },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsEntryRoutingModule { }