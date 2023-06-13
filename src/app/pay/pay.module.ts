import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayRoutingModule } from './pay-routing.module';
import { PayComponent } from './pay/pay.component';
import { PaypalModule } from './paypal/paypal.module';
import { CrudBarComponent } from './crud-bar/crud-bar.component';


@NgModule({
  declarations: [
    PayComponent,
    CrudBarComponent
  ],
  imports: [
    CommonModule,
    PayRoutingModule,
    PaypalModule
  ],
  exports: [
    PayComponent
  ]
})
export class PayModule { }
