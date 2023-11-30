import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/layout/ProductService/product.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit {
  productgetfurniture: any = [];
  userid = localStorage.getItem("id");
  productcartid: any
  constructor(public api: ProductService,private messageservice: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.categroyGet();
  }

  categroyGet() {
    this.api.productGet().subscribe({
      next: (res: any) => {
        res.forEach((element: any) => {
          if (element.category == "6") {
            this.productgetfurniture.push(element);
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
