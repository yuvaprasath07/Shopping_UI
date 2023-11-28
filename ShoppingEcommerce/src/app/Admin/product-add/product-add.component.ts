import { Component, OnInit } from '@angular/core';
import { ProductaddService } from './productadd.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productadd: any = {};
  constructor(public api: ProductaddService, private messageservice: MessageService, private router: Router) { }

  ngOnInit(): void {

  }

  productsubmit() {
    var body = {

    }
    this.api.adminProcadd(body).subscribe({
      next: (res: any) => {

      }
    })
  }

}
