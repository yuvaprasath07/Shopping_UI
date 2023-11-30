import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/layout/ProductService/product.service';

@Component({
  selector: 'app-men-clothes',
  templateUrl: './men-clothes.component.html',
  styleUrls: ['./men-clothes.component.scss']
})
export class MenClothesComponent implements OnInit {
  userid = localStorage.getItem("id");
  productcartid: any
  productgetmenclothes: any = [];
  constructor(public api: ProductService,private messageservice: MessageService, private router: Router) { }

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
            this.productcartid = element.productId
          }
        });
      }
    })
  }
  addcart() {
    var body = {
      productcartid: this.productcartid,
      userid: this.userid
    }
    this.api.cartadd(body).subscribe({
      next: (res: any) => {
        if (res.code == 200) {
          this.messageservice.add({ severity: 'success', summary: 'Success', detail: 'Successfully Add cart' });
          setTimeout(() => {
            this.router.navigate(['/Addcart']);
          }, 1000);
        }
        else {
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: 'Failed' });
        }
      },
      error: (error: any) => {
        console.log('Error in loginshopping API:', error);
      }
    })
  }
}
