import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/layout/ProductService/product.service';

@Component({
  selector: 'app-men-clothes',
  templateUrl: './men-clothes.component.html',
  styleUrls: ['./men-clothes.component.scss']
})
export class MenClothesComponent implements OnInit {
  productgetmenclothes: any = [];
  constructor(public api: ProductService) { }

  ngOnInit(): void {
    this.categroyGet();
  }

  categroyGet() {
    debugger
    this.api.productGet().subscribe({
      next: (res: any) => {
        res.forEach((element: any) => {
          if (element.category == "2") {
            this.productgetmenclothes.push(element);
          }
        });
      }
    })
  }

}
