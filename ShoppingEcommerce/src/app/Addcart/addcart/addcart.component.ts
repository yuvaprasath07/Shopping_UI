import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../addcart.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {
  productget: any = [];

  constructor(public api: AddcartService) { }

  ngOnInit(): void {
    this.cartGet();
  }

  cartGet() {
    debugger
    this.api.getCart().subscribe({
      next: (res: any) => {
        res.forEach((element:any) => {
          if(element.registerid==localStorage.getItem("id")){
            this.productget.push(element);
          }
        });
      }
    })
  }

}
