import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  registerShopping(body: any) {
    return this.http.post("https://localhost:7209/api/Auth/Register", body)
  }

  loginshopping(body: any) {
    return this.http.post("https://localhost:7209/api/Auth/login", body)
  }
}
