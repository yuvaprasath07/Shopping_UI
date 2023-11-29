import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './Auth/register/register.component';
import { MobileComponent } from './Category/mobile/mobile.component';
import { authGuard } from './Helper/auth.guard';
import { MenClothesComponent } from './Category/men-clothes/men-clothes.component';
import { WomenClothesComponent } from './Category/women-clothes/women-clothes.component';
import { ElectronicsComponent } from './Category/electronics/electronics.component';
import { SportsComponent } from './Category/sports/sports.component';
import { FurnitureComponent } from './Category/furniture/furniture.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  {
    path: 'Layout', component: LayoutComponent,
    children: [
      { path: 'Mobile', component: MobileComponent },
      { path: 'Men-Clothes', component: MenClothesComponent },
      { path: 'Women-Clothes', component: WomenClothesComponent },
      { path: 'Electronics', component: ElectronicsComponent },
      { path: 'Sports', component: SportsComponent },
      { path: 'Furniture', component: FurnitureComponent },
    ], canActivate: [authGuard]
  },
  { path: 'ProductAdd', loadChildren: () => import('./Admin/product-add/product-add.module').then(m => m.ProductAddModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
