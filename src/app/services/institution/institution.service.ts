import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institution } from 'src/app/models/institution.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  private apiUrl = environment.apiUrl+'institution';

  constructor(private http: HttpClient) { }

  getInstitutions(): Observable<Institution[]> {
    return this.http.get<Institution[]>(this.apiUrl);
  }

  getInstitution(id: number): Observable<Institution> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Institution>(url);
  }

  addInstitution(institution: Institution): Observable<Institution> {
    return this.http.post<Institution>(this.apiUrl, institution);
  }

  updateInstitution(institution: Institution): Observable<any> {
    const url = `${this.apiUrl}/${institution.institution_id}`;
    return this.http.put(url, institution);
  }

  deleteInstitution(id: number): Observable<Institution> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Institution>(url);
  }
}
