import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { StorageService } from '../services/storage.service';

export const AuthGuard: CanActivateFn = (
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot,
): Observable<boolean> | Promise<boolean> | boolean => {
   const storage = inject(StorageService);
   const router = inject(Router);
   
   if (!storage.getData('isLoggedIn')) {
      router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
      return false
   } else {
      return true
   }
} 