import { Component, Input } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.scss']
})
export class ConnectedComponent {
  username: string | null = null;
  constructor(private _authService: AuthService) { }
  ngOnInit(): void {
    this._authService.isConnected$.subscribe(isConnected => {
      if (isConnected) {
        this.updateUsername();
      } else {
        this.username = null;
      }
    });
  }

  private updateUsername(): void {
    const token = localStorage.getItem('token');
    if (token) {
      // const decodedToken = decodeToken(token);
      // Assurez-vous que votre token JWT contient un champ 'username' avec le nom d'utilisateur
      this.username = localStorage.getItem('user_firstname') + " " + localStorage.getItem('user_lastname');
    }
  }
}
