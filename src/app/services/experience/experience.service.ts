import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/models/experience.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = environment.apiUrl+'experience';

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl);
  }

  getExperience(id: number): Observable<Experience> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Experience>(url);
  }

  addExperience(Experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.apiUrl, Experience);
  }

  updateExperience(Experience: Experience): Observable<any> {
    const url = `${this.apiUrl}/${Experience.experience_id}`;
    return this.http.put(url, Experience);
  }

  deleteExperience(id: number): Observable<Experience> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Experience>(url);
  }
}
