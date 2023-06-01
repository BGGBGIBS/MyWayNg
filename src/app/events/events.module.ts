import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './add-event/add-event.component';


@NgModule({
  declarations: [
    EventsComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  exports: [
    EventsComponent,
    AddEventComponent
  ]
})
export class EventsModule { }
