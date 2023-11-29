import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/layout/ProductService/product.service';

@Component({
  selector: 'app-women-clothes',
  templateUrl: './women-clothes.component.html',
  styleUrls: ['./women-clothes.component.scss']
})
export class WomenClothesComponent implements OnInit {
  productgetwomenclothes: any = [];
  constructor(public api: ProductService) { }

  ngOnInit(): void {
    this.categroyGet();
  }
  categroyGet() {
    this.api.productGet().subscribe({
      next: (res: any) => {
        res.forEach((element: any) => {
          if (element.category == "3") {
            this.productgetwomenclothes.push(element);
          }
        });
      }
    })
  }
}
