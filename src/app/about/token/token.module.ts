import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenRoutingModule } from './token-routing.module';
import { TokenComponent } from './token/token.component';


@NgModule({
  declarations: [
    TokenComponent
  ],
  imports: [
    CommonModule,
    TokenRoutingModule
  ],
  exports: [
    TokenComponent
  ]
})
export class TokenModule { }
