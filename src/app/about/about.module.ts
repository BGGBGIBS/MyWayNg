import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { FounderComponent } from './founder/founder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudBarComponent } from './crud-bar/crud-bar.component';


@NgModule({
  declarations: [
    AboutComponent,
    ProjectComponent,
    FounderComponent,
    CrudBarComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AboutComponent,
    ProjectComponent,
    FounderComponent
  ]
})
export class AboutModule { }
