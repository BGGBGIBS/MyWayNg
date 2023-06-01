import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth, AuthRegister } from 'src/app/models/auth.model';
import { Login } from 'src/app/models/login.model';
import { Register } from 'src/app/models/register.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private _authUrl : string = environment.apiUrl+'auth/'

  private _username$ = new BehaviorSubject<string | null>(null);
  username$ = this._username$.asObservable();


  
  //asObservable permet de transformer un Subject ou Behavior en simple Observable
  //Ainsi, les composants pourront juste s'abonner à lui, mais c'est le service qui se charge de next une nouvelle valeur
  private _isConnected$ : BehaviorSubject<boolean> = new BehaviorSubject(localStorage.getItem('token') && localStorage.getItem('token') != '' ? true : false)
  isConnected$ = this._isConnected$.asObservable()

  constructor(private _httpClient : HttpClient) { }

  register(register : Register) : Observable<AuthRegister> {
    return this._httpClient.post<AuthRegister>(this._authUrl+'register', register)
  }

  login(login : Login) : Observable<Auth> {
    this.connect();
    return this._httpClient.post<Auth>(this._authUrl+'login', login)
  }

  logout() : void {
    // localStorage.clear()
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_firstname');
    localStorage.removeItem('user_lastname');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_password');

    this._username$.next(null);
    this.disconnect();
  }
  disconnect(): void{
    this._isConnected$.next(false);
  }
  connect() : void {
    this._isConnected$.next(true);
  }

  admin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtHelper = new JwtHelperService();
      const decodedToken = jwtHelper.decodeToken(token);
      return decodedToken.role === 'admin';
    }
    return false;
  }
}
