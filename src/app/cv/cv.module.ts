import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SkillsComponent } from './skills/skills.component';
import { CvComponent } from './cv/cv.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCvComponent } from './update-cv/update-cv.component';
import { GetCvComponent } from './get-cv/get-cv.component';
import { CrudBarComponent } from './crud-bar/crud-bar.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EducationComponent,
    ExperiencesComponent,
    SkillsComponent,
    CvComponent,
    AddCvComponent,
    UpdateCvComponent,
    GetCvComponent,
    CrudBarComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ProfileComponent,
    EducationComponent,
    ExperiencesComponent,
    SkillsComponent,
    CvComponent,
    AddCvComponent,
    UpdateCvComponent,
    GetCvComponent,
    CrudBarComponent
  ]
})
export class CvModule { }
