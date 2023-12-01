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

  constructor(public api: AddcartService, private messageservice: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.cartGet();
  }

  cartGet() {
    this.api.getCart().subscribe({
      next: (res: any) => {
        res.forEach((element: any) => {
          if (element.registerid == localStorage.getItem("id")) {
            this.productget.push(element);
          }

        });
      }
    })
  }

  deletecart(id: any) {
    debugger
    this.api.deletecart(id).subscribe({
      next: (res: any) => {
        this.messageservice.add({ severity: 'success', summary: 'Success', detail: 'Successfully Login' })
      },
      error: (error: any) => {
        console.log('Error in loginshopping API:', error);
      }
    })
  }

}
