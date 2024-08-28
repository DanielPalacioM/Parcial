import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailPage } from './productdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductdetailPageRoutingModule {}
