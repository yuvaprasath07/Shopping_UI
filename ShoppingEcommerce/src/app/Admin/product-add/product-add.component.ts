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
  categroylookup: any = [];
  selectedFilePath: any;
  constructor(public api: ProductaddService, private messageservice: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.lookupcategroy();
  }

  lookupcategroy() {
    this.api.categroylookupdata().subscribe({
      next: (res: any) => {
        this.categroylookup = res;
      }
    })
  }

  productsubmit(productadd: any) {
    const formData = new FormData();
    formData.append('price', productadd.Price);
    formData.append('model', productadd.Model);
    formData.append('Description', productadd.Description);
    formData.append('category', productadd.Category);
    formData.append('Imagefilepath', this.selectedFilePath);
    this.api.adminProcadd(formData).subscribe({
      next: (res: any) => {
        if (res.code == 200) {
          this.messageservice.add({ severity: 'success', summary: 'Success', detail: 'AddProduct' });
          setTimeout(() => {
            this.router.navigate(['/Layout']);
          }, 1000);
        }
      }
    })
  }


  imgUpload(event: any) {
    if (event.files && event.files.length > 0) {
      this.selectedFilePath = event.files[0]
    }
  }
}
