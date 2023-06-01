import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserArray } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl+'user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserArray> {
    return this.http.get<UserArray>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser(User: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, User);
  }

  updateUser(User: User): Observable<any> {
    const url = `${this.apiUrl}/${User.user_id}`;
    return this.http.put(url, User);
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<User>(url);
  }
}
