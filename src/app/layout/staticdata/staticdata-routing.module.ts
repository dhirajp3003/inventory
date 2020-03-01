import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticdataComponent } from './staticdata.component';
import { MenuAddComponent } from './component/menu-add/menu-add.component';
import { AddCuisineComponent } from './component/add-cuisine/add-cuisine.component';


///work with activiated route instead stead
const routes: Routes = [
  { path: '', component: StaticdataComponent},
  { path: 'add', component: MenuAddComponent },
  { path: 'addCuisine', component: AddCuisineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticdataRoutingModule { }
