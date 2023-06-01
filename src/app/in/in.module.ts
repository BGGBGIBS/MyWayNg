import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InRoutingModule } from './in-routing.module';
import { FormInComponent } from './form-in/form-in.component';
import { FormSigninComponent } from './form-signin/form-signin.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormQuitComponent } from './form-quit/form-quit.component';
import { CrudBarComponent } from './crud-bar/crud-bar.component';


@NgModule({
  declarations: [
    FormInComponent,
    FormSigninComponent,
    FormLoginComponent,
    FormQuitComponent,
    CrudBarComponent
  ],
  imports: [
    CommonModule,
    InRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormInComponent,
    FormSigninComponent,
    FormLoginComponent,
    FormQuitComponent
  ]
})
export class InModule { }
