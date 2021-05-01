import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Category} from './../models';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/categories/`);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/categories/${id}/`);
  }

  getPostsOfCategory(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/categories/${id}/products`);
  }
}
