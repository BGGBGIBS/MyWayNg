import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn/learn.component';
import { CrudBarComponent } from './crud-bar/crud-bar.component';


@NgModule({
  declarations: [
    LearnComponent,
    CrudBarComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule
  ],
  exports: [
    LearnComponent
  ]
})
export class LearnModule { }
