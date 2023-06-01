import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { routes, navLinks } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DisplayService } from 'src/app/services/toggle/display.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  display$ = this._displayService.display$;
  connected$ = this._authService.isConnected$;

  appRoutes: Routes;
  appLinks: any;
  constructor(private _displayService: DisplayService, private router: Router, private _authService: AuthService){
    this.appRoutes = routes;
    this.appLinks = navLinks;
  }
  logout() {
    this._authService.logout();    
    this.router.navigate(['/in']);
  }
  toggleDisplay() {
    this._displayService.toggleDisplay();
  }
}
