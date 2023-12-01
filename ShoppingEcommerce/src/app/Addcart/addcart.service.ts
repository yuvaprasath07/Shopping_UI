import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  constructor(public http: HttpClient) { }

  getCart() {
    return this.http.get("https://localhost:7209/api/Addcart/GetCard")
  }

  deletecart(id: any) {
    return this.http.delete("https://localhost:7209/api/Addcart/Deletecart/", id);
  }

}
