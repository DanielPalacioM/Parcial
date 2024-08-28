import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductdetailPageRoutingModule } from './productdetail-routing.module';

import { ProductDetailPage } from './productdetail.page';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductdetailPageRoutingModule,
    CurrencyPipe
  ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
