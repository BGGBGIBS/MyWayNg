import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathsRoutingModule } from './maths-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MathsRoutingModule
  ],
  exports: [
    AboutComponent
  ]
})
export class MathsModule { }
