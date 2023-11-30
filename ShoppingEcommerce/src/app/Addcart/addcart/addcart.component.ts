import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../addcart.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {
  productget: any = [];

  constructor(public api: AddcartService,private messageservice: MessageService, private router: Router) { }

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
