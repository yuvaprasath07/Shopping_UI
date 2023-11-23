import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    MobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
