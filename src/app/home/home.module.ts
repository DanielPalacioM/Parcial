import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from '../service/http.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    HomePageRoutingModule,
    HttpClientModule,
    CurrencyPipe
    
  ],
  declarations: [HomePage],
  providers: [HttpService]  
})
export class HomePageModule {}
