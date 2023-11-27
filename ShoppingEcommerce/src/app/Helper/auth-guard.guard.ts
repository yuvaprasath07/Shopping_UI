import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  
  const isToken = localStorage.getItem("token") ? true : false;
  if (isToken) {
    return true;
  } else {
    // this.router.navigate(['/Layout']);
    return false;
  }
};
