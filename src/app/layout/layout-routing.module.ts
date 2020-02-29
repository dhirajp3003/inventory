import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent }, 
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) },
  { path: 'staticdata', loadChildren: () => import('./staticdata/staticdata.module').then(m => m.StaticdataModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
