import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = environment.apiUrl+ 'education';

  constructor(private http: HttpClient) { }

  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl);
  }

  getEducation(id: number): Observable<Education> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Education>(url);
  }

  addEducation(Education: Education): Observable<Education> {
    return this.http.post<Education>(this.apiUrl, Education);
  }

  updateEducation(Education: Education): Observable<any> {
    const url = `${this.apiUrl}/${Education.education_id}`;
    return this.http.put(url, Education);
  }

  deleteEducation(id: number): Observable<Education> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Education>(url);
  }
}
