import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductaddService {

  constructor(public http: HttpClient) { }

  adminProcadd(body: any) {
    return this.http.post("", body)
  }
}
