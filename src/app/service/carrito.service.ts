import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Response } from '../Interface/Products';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Response[] = [];
  private total = new BehaviorSubject<number>(0);
  carrito$ = new BehaviorSubject<Response[]>(this.carrito);
  total$ = this.total.asObservable();

  constructor() { }

  addToCarrito(product: Response) {
    this.carrito.push(product);
    this.updateTotal();
    this.carrito$.next(this.carrito);
  }

  removeItem(product: Response) {
    
    const index = this.carrito.findIndex(item => item.id === product.id);
    
    if (index !== -1) {
      
      this.carrito.splice(index, 1);
      this.updateTotal();
      this.carrito$.next(this.carrito);
    }
  }
  
  clearCart() {
    this.carrito = []; 
    this.updateTotal(); 
    this.carrito$.next(this.carrito); 
  }

  private updateTotal() {
    const total = this.carrito.reduce((acc, product) => acc + product.price, 0);
    this.total.next(total);
  }

  
}
