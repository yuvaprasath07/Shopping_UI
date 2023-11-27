import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './Auth/register/register.component';
import { MobileComponent } from './Category/mobile/mobile.component';
import { authGuardGuard } from './Helper/auth-guard.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  {
    path: 'Layout', component: LayoutComponent,
    children: [
      { path: 'Mobile', component: MobileComponent }
    ],canActivate: [authGuardGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
