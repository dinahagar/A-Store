import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userData } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userData: userData) {
    return this.http.post<userData>(`https://fakestoreapi.com/auth/login`, userData)
  }
}
