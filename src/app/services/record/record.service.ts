import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record, RecordArray } from 'src/app/models/record.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private apiUrl = environment.apiUrl+'record';


  constructor(private http: HttpClient) {}

  getUserRecords(userId: number): Observable<RecordArray> {
    return this.http.get<RecordArray>(`${this.apiUrl}/user/${userId}`);
  }
  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.apiUrl);
  }

  getRecord(id: number): Observable<Record> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Record>(url);
  }

  getRecordByUser(userId: number): Observable<RecordArray>{
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.get<RecordArray>(url);
  }

  addRecord(Record: Record): Observable<Record> {
    return this.http.post<Record>(this.apiUrl, Record);
  }

  updateRecord(Record: Record): Observable<Record> {
    const url = `${this.apiUrl}/${Record.record_id}`;
    return this.http.put<Record>(url, Record);
  }

  deleteRecord(id: number): Observable<Record> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Record>(url);
  }
}