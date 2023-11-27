import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isToken = localStorage.getItem("token") ? true : false;
  if (isToken) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
};
