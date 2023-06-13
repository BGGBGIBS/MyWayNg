import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypalRoutingModule } from './paypal-routing.module';
import { PaypalComponent } from './paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaypalComponent
  ],
  imports: [
    CommonModule,
    PaypalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ],
  exports: [
    PaypalComponent
  ]
})
export class PaypalModule { }
