import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { isValidMode } from 'src/app/shared/constants/app.constants';

export const modeGuard: CanActivateFn = (route) => {

  const router = inject(Router);
  const mode = route.paramMap.get('mode');

  // 👇 evitar loop con 404
  if (mode === '404') {
    return true;
  }

  if (isValidMode(mode)) {
    return true;
  }

  return router.createUrlTree(['/404']);
};