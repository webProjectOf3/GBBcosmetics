import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product} from '../models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getProducts(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/categories/${(id)}/products`);
  }

}
