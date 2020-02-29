import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticdataComponent } from './staticdata.component';

const routes: Routes = [{ path: '', component: StaticdataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticdataRoutingModule { }
