import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../../models/product.model';

import { ProductService } from '../../../../core/services/product/product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);      
    })

  }

  fetchProduct(id) {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    })
  }

  createProduct() {
    const newProduct: Product = {
      id: '999',
      title: 'Nuevo desde angular 10',
      image: 'assets/images/pin.png',
      price: 3000,
      description: 'Producto nuevo'
    }
    this.productService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    })
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 5555,
      description: 'Producto Editado'
    }
    this.productService.updateProduct('999', updateProduct).subscribe(product => {
      console.log(product);
    })
  }

  deleteProduct() {
    this.productService.deleteProduct('999').subscribe(response => {
      console.log(response);
    })
  }

}
