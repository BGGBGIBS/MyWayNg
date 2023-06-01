import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {
  constructor(private router: Router) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  //   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   const isLoggedIn = localStorage.getItem('user_id') !== null;
  //   if (isLoggedIn) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const helper = new JwtHelperService();

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = helper.decodeToken(token);
        // console.log(decodedToken.user_id);
        if (decodedToken && decodedToken.user_id) {
          // this.router.navigate(['/cv']);
          return true;
        } else {
          this.router.navigate(['/redirect']);
          return false;
        }
      } catch (error) {
        console.error('Invalid token', error);
        this.router.navigate(['/redirect']);
        return false;
      }
    } else {
      this.router.navigate(['/redirect']);
      return false;
    }
  }
}
