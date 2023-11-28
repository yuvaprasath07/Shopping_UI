import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './Auth/register/register.component';
import { MobileComponent } from './Category/mobile/mobile.component';
import { authGuard } from './Helper/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  {
    path: 'Layout', component: LayoutComponent,
    children: [
      { path: 'Mobile', component: MobileComponent }
    ], canActivate: [authGuard]
  },
  { path: 'ProductAdd', loadChildren: () => import('./Admin/product-add/product-add.module').then(m => m.ProductAddModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
