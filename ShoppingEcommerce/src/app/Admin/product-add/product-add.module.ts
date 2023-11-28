import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAddRoutingModule } from './product-add-routing.module';
import { ProductAddComponent } from './product-add.component';
import { PrimengModule } from 'src/app/primengModule/primeng/primeng.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ProductAddRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class ProductAddModule { }
