import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HederComponent } from './layout/heder/heder.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { PrimengModule } from './primengModule/primeng/primeng.module';
import { MobileComponent } from './Category/mobile/mobile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ProductAddModule } from './Admin/product-add/product-add.module';
import { MenClothesComponent } from './Category/men-clothes/men-clothes.component';
import { WomenClothesComponent } from './Category/women-clothes/women-clothes.component';
import { ElectronicsComponent } from './Category/electronics/electronics.component';
import { SportsComponent } from './Category/sports/sports.component';
import { FurnitureComponent } from './Category/furniture/furniture.component';
import { AddcartComponent } from './Addcart/addcart/addcart.component';
  
@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    MobileComponent,
    MenClothesComponent,
    WomenClothesComponent,
    ElectronicsComponent,
    SportsComponent,
    FurnitureComponent,
    AddcartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PrimengModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ProductAddModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
