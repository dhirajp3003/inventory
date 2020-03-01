import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'primeng/fileupload';

import { StaticdataRoutingModule } from './staticdata-routing.module';
import { StaticdataComponent } from './staticdata.component';
import { MenuAddComponent } from './component/menu-add/menu-add.component';
import { AddCuisineComponent } from './component/add-cuisine/add-cuisine.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StaticdataComponent, MenuAddComponent, AddCuisineComponent],
  imports: [
    CommonModule,
    StaticdataRoutingModule,
    FileUploadModule,
    FormsModule
  ]
})
export class StaticdataModule { }
