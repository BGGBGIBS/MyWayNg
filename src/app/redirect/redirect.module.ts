import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedirectRoutingModule } from './redirect-routing.module';
import { RedirectComponent } from './redirect/redirect.component';


@NgModule({
  declarations: [
    RedirectComponent
  ],
  imports: [
    CommonModule,
    RedirectRoutingModule
  ],
  exports: [
    RedirectComponent
  ]
})
export class RedirectModule { }
