import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'primeng/fileupload';

import { StaticdataRoutingModule } from './staticdata-routing.module';
import { StaticdataComponent } from './staticdata.component';
import { MenuAddComponent } from './component/menu-add/menu-add.component';


@NgModule({
  declarations: [StaticdataComponent, MenuAddComponent],
  imports: [
    CommonModule,
    StaticdataRoutingModule,
    FileUploadModule
  ]
})
export class StaticdataModule { }
