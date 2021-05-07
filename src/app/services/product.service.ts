import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product} from '../models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getProducts(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URl}/api/categories/${id}/products`);
  }

}
