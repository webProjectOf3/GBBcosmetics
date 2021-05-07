import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Category} from './../models';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // tslint:disable-next-line:variable-name
  base_url = 'http://127.0.0.1:8000/api/categories/';

  constructor(private http: HttpClient) { }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.base_url) ;
  }
}
