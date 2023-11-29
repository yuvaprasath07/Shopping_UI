import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/layout/ProductService/product.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  productgetmobile: any = [];
  constructor(public api: ProductService) { }

  ngOnInit(): void {
    this.categroyGet();
  }
  categroyGet() {
    this.api.productGet().subscribe({
      next: (res: any) => {
        res.forEach((element: any) => {
          if (element.category == "1") {
            this.productgetmobile.push(element);
          }
        });
      }
    })
  }
}
