import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypalRoutingModule } from './paypal-routing.module';
import { PaypalComponent } from './paypal/paypal.component';


@NgModule({
  declarations: [
    PaypalComponent
  ],
  imports: [
    CommonModule,
    PaypalRoutingModule
  ],
  exports: [
    PaypalComponent
  ]
})
export class PaypalModule { }
