import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../service/carrito.service';
import { Router } from '@angular/router';  
import { Response } from '../Interface/Products';
import { AlertController } from '@ionic/angular';
import { first } from 'rxjs/operators'; 

@Component({
  selector: 'app-carrito-product',
  templateUrl: './carrito-product.page.html',
  styleUrls: ['./carrito-product.page.scss'],
})
export class CarritoProductPage implements OnInit {

  carrito$ = this.carritoService.carrito$;
  total$ = this.carritoService.total$;

  constructor(private carritoService: CarritoService,
              private router: Router,
              private alertController: AlertController) { }

  goBackToHome() {
    this.router.navigate(['/home']);
  }

  removeItem(item: Response) {
    this.carritoService.removeItem(item);
  }

  async processPayment() {
    const carrito = await this.carrito$.pipe(first()).toPromise();

    if (!carrito || carrito.length === 0) {
      const alert = await this.alertController.create({
        header: 'Carrito Vacío',
        message: 'No hay productos en el carrito para pagar.',
        buttons: ['OK']
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Pago Exitoso',
        message: 'Tu pago ha sido procesado con éxito.',
        buttons: ['OK']
      });

      await alert.present();

      this.carritoService.clearCart();
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {}
}
