import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const helper = new JwtHelperService();

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = helper.decodeToken(token);
        console.log(decodedToken.user_role);
        if (decodedToken && decodedToken.user_role === 'admin') {
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
