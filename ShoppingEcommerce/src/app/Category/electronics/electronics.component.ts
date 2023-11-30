import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/layout/ProductService/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {
  productgetelectronics: any = [];
  userid = localStorage.getItem("id");
  productcartid: any
  constructor(public api: ProductService) { }

  ngOnInit(): void {
    this.categroyGet();
  }
  categroyGet() {
    this.api.productGet().subscribe({
      next: (res: any) => {
        res.forEach((element: any) => {
          if (element.category == "4") {
            this.productgetelectronics.push(element);
            this.productcartid = element.productId
          }
        });
      }
    })
  }

  addcart() {
    debugger
    var body = {
      productcartid: this.productcartid,
      userid: this.userid
    }
    this.api.cartadd(body).subscribe({
      next: (res: any) => {
      }
    })
  }
}
