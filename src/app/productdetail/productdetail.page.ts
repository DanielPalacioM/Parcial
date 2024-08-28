
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { environment } from 'src/environments/environment.prod';
import { Response } from '../Interface/Products';
import { CarritoService } from '../service/carrito.service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './productdetail.page.html', 
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: Response | undefined;

  constructor(
    private route: ActivatedRoute,
    private httpSrv: HttpService,
    private router: Router,
    private carritoService: CarritoService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const url = environment.URL_BASE + "products/" + id;
      this.product = await this.httpSrv.get<Response>(url);
    }
  }

  addToCart() {
    if (this.product) {
      this.carritoService.addToCarrito(this.product);
      this.router.navigate(['/carrito-product']);
  }
}

  goBackToHome(){
    this.router.navigate(['/home'])
  }
}
