import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticdataRoutingModule } from './staticdata-routing.module';
import { StaticdataComponent } from './staticdata.component';


@NgModule({
  declarations: [StaticdataComponent],
  imports: [
    CommonModule,
    StaticdataRoutingModule
  ]
})
export class StaticdataModule { }
