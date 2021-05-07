import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://localhost:8000';

  constructor(
    private http: HttpClient
  ) { }

  login(username, password): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/login/`, {
      username,
      password
    });
  }



  // getMyProfile(): Observable<any> {
  //   return this.http.get(`${this.BASE_URL}/auth/my-profile/`);
  // }

}
