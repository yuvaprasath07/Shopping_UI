import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    CheckboxModule,
    ToastModule,
    GalleriaModule
  ],
  exports:[
    InputTextModule,
    CheckboxModule,
    ToastModule,
    GalleriaModule
  ]
})
export class PrimengModule { }
