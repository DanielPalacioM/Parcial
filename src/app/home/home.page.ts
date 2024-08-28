  import { Component, OnInit } from '@angular/core';
  import { HttpService } from '../service/http.service';
  import { environment } from 'src/environments/environment.prod';
  import { Response } from '../Interface/Products';
  import { Router } from '@angular/router';


  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage implements OnInit {

    public products: Response[] = [];  
    public filteredProducts: Response[] = [];
    public selectedCategory: string = '';

    constructor(private readonly httpSrv: HttpService, private router: Router) {}

    async ngOnInit()  {
      const url = environment.URL_BASE + "products";
      this.products = await this.httpSrv.get<Response[]>(url);  
    console.log("🚀 ~ HomPage ~ ngOnInit ~ this.products:", this.products);
    }
    goToProductDetail(productId: number) {
      this.router.navigate(['/product-detail', productId]);
    }

    goToCart() {
      this.router.navigate(['/carrito-product']);
    }

    filterProducts() {
      if (this.selectedCategory) {
        this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
      } else {
        this.filteredProducts = [...this.products];
      }
    }

  }



  