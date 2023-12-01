import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  productGet() {
    return this.http.get("https://localhost:7209/api/AdminProductadd/productGet")
  }

  cartadd(body: any) {
    return this.http.post("https://localhost:7209/api/Addcart/productAddcart", body)
  }


}
