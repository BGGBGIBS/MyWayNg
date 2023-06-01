import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Cv, CvArray } from 'src/app/models/cv.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = environment.apiUrl+'record';


  constructor(private http: HttpClient) { }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.apiUrl);
  }

  getCv(id: number): Observable<Cv> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Cv>(url);
  }

  getCvByUser(userId: number): Observable<CvArray>{
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<CvArray>(url);
  }

  addCv(Cv: Cv): Observable<Cv> {
    return this.http.post<Cv>(this.apiUrl, Cv);
  }

  updateCv(Cv: Cv): Observable<Cv> {
    const url = `${this.apiUrl}/${Cv.record_id}`;
    return this.http.put<Cv>(url, Cv);
  }

  deleteCv(id: number): Observable<Cv> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Cv>(url);
  }
}
