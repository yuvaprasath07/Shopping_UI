import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductaddService {

  constructor(public http: HttpClient) { }

  adminProcadd(body: any) {
    return this.http.post("https://localhost:7209/api/AdminProductadd/AdminProductAdd", body)
  }

  categroylookupdata(){
    return this.http.get("https://localhost:7209/api/Categroylookup/GetCategory")
  }

}
