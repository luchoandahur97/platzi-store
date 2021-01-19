import { Component, OnInit } from '@angular/core';

import { Product } from '../../../../models/product.model';

import { ProductService } from '../../../../core/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  
  fetchProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }
  clickProduct(event: any) {
    console.log('Product', event);

  }
}
