import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/layout/ProductService/product.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit {
  productgetfurniture: any = [];
  constructor(public api: ProductService) { }

  ngOnInit(): void {
    this.categroyGet();
  }

  categroyGet() {
    this.api.productGet().subscribe({
      next: (res: any) => {
        res.forEach((element: any) => {
          if (element.category == "6") {
            this.productgetfurniture.push(element);
          }
        });
      }
    })
  }

}
