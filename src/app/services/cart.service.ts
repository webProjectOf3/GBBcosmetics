import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  BASE_URl = 'http://127.0.0.1:8000/';

  items = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }


}
