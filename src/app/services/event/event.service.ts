import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, EventArray } from 'src/app/models/event.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = environment.apiUrl+'event';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<EventArray> {
    return this.http.get<EventArray>(this.apiUrl);
  }

  getEvent(id: number): Observable<Event> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Event>(url);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }

  updateEvent(event: Event): Observable<any> {
    const url = `${this.apiUrl}/${event.event_id}`;
    return this.http.put(url, event);
  }

  deleteEvent(id: number): Observable<Event> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Event>(url);
  }
}
