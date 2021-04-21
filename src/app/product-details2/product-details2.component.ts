import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products2 } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details2',
  templateUrl: './product-details2.component.html',
  styleUrls: ['./product-details2.component.css']
})
export class ProductDetails2Component implements OnInit {

  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  this.product = products2.find(product => product.id === productIdFromRoute);
  }
}
