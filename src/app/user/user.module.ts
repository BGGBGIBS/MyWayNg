import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { AgePipe } from '../pipes/age.pipe';
import { UserIdComponent } from './user-id/user-id.component';


@NgModule({
  declarations: [
    UserComponent,
    AgePipe,
    UserIdComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserComponent,
    UserIdComponent
  ]
})
export class UserModule { }
