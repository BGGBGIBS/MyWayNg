import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from "src/app/models/event.model";
import { EventService } from 'src/app/services/event/event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events!: Event[];
  sud: boolean = false;

  constructor(private _eventservice : EventService, private _router : Router) {}

  ngOnInit() : void{
    this.getEvents();
    
  }
  getEvents(): void {
    this._eventservice.getEvents().subscribe({
      next: (res) => {
        console.log("NEXT", res);
        
        this.events = res.results;
        console.log(this.events);
        
      },
      error : (err) => {
        console.log("ERROR", err);
        
      },
      complete : () => {
        console.log("COMPLETE");
      }
    })
  }
  showEventDetails(): void {
    this.sud = !this.sud;
  }
  deleteEvent(toDelete: number): void {
    this._eventservice.deleteEvent(toDelete).subscribe({
      next: (res) => {
        console.log("NEXT : ", res);
        
      },
      error: (err) => {
        console.error("Error deleting Event:", err);
      },
      complete : () => {
        console.log("COMPLETE");
      }
    })
  }
}
