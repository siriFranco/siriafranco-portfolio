import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { isValidMode } from '../constants/app.constants';

export const modeGuard: CanActivateFn = (route) => {

  const router = inject(Router);

  const mode = route.paramMap.get('mode');

  if (isValidMode(mode)) {
    return true;
  }

  // 🚨 invalid URL → redirect cleanly
  return router.createUrlTree(['/home']);
};