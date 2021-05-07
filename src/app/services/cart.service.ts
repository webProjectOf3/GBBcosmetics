import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import {Product} from '../models';
import {CartItem} from '../models';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  BASE_URl = 'http://127.0.0.1:8000/';

  // items: CartItem[];
  //
  // constructor(
  //   private http: HttpClient
  // ) { }
  //
  // addToCart(product): Observable<CartItem> {
  //   return this.http.post<CartItem>(`${this.BASE_URl}/api/cart-items/`, {product: product.id , quantity: 1});
  // }
  //
  // getItems(): Observable<CartItem[]> {
  //   return this.http.get<CartItem[]>(`${this.BASE_URl}/api/cart-items/`);
  // }


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
