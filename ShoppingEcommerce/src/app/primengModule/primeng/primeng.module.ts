import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import { GalleriaModule } from 'primeng/galleria';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
@NgModule({
  declarations: [],
  imports: [
    InputTextModule,
    CheckboxModule,
    ToastModule,
    GalleriaModule,
    TooltipModule,
    CardModule,
    InputTextareaModule,
    DropdownModule,
    FileUploadModule
  ],
  exports:[
    InputTextModule,
    CheckboxModule,
    ToastModule,
    GalleriaModule,
    TooltipModule,
    CardModule,
    InputTextareaModule,
    DropdownModule,
    FileUploadModule
  ]
})
export class PrimengModule { }
