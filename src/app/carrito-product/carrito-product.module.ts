import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritoProductPageRoutingModule } from './carrito-product-routing.module';

import { CarritoProductPage } from './carrito-product.page';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoProductPageRoutingModule,
    CurrencyPipe
  ],
  declarations: [CarritoProductPage]
})
export class CarritoProductPageModule {}
