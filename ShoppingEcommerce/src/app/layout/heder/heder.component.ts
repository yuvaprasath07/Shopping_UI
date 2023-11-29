import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../ProductService/product.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {
  username: string | null = null;
  usertype: string | any = localStorage.getItem("user-type")
  productget: any = [];
  constructor(private route: Router, public api: ProductService) { }

  ngOnInit(): void {
    this.categroyGet();
    const storedValue = localStorage.getItem('name');
    this.username = storedValue ? storedValue.charAt(0) : null;
  }

  logout() {
    localStorage.clear();
    this.route.navigate(["/login"]);
  }

  categroyGet() {
    debugger
    this.api.productGet().subscribe({
      next: (res: any) => {
        res.forEach((element:any) => {
          if(element.category=="1"){
            this.productget.push(element);
          }
        });
      }
    })
  }

}
