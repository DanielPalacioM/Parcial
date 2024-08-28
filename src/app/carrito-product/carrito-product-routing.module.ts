import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritoProductPage } from './carrito-product.page';

const routes: Routes = [
  {
    path: '',
    component: CarritoProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritoProductPageRoutingModule {}
