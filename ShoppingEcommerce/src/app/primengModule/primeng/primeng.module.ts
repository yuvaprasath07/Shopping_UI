import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    CheckboxModule,
    ToastModule
  ],
  exports:[
    InputTextModule,
    CheckboxModule,
    ToastModule
  ]
})
export class PrimengModule { }
