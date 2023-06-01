import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AresDatasetArray } from 'src/app/models/ares/dataset.model';
import { AresDomaineArray } from 'src/app/models/ares/domaine.model';
import { AresGrade , AresGradeArray} from 'src/app/models/ares/grade.model';
import { AresInstitutionArray } from "src/app/models/ares/institution.model";
import { AresPasserelleArray } from 'src/app/models/ares/passerelle.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AresService {
  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAresDatasets(): Observable<AresDatasetArray>{
    return this.http.get<AresDatasetArray>(this.apiUrl+'ares/dataset');
  }
  getAresDomaines(): Observable<AresDomaineArray>{
    return this.http.get<AresDomaineArray>(this.apiUrl+'ares/domaine');
  }
  getAresGrades(): Observable<AresGradeArray> {
    return this.http.get<AresGradeArray>(this.apiUrl+'ares/grade');
  }
  getAresPasserelles(): Observable<AresPasserelleArray> {
    return this.http.get<AresPasserelleArray>(this.apiUrl+'ares/passerelle');
  }
  getAresInstitutions(): Observable<AresInstitutionArray> {
    return this.http.get<AresInstitutionArray>(this.apiUrl+'ares/institution');
  }
}
