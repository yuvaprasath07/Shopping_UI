import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/layout/ProductService/product.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  productgetsports: any = [];
  constructor(public api: ProductService) { }

  ngOnInit(): void {
    this.categroyGet();
  }

  categroyGet() {
    this.api.productGet().subscribe({
      next: (res: any) => {
        res.forEach((element: any) => {
          if (element.category == "5") {
            this.productgetsports.push(element);
          }
        });
      }
    })
  }

}
