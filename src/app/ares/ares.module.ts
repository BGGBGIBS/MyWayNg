import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AresRoutingModule } from './ares-routing.module';
import { AresComponent } from './ares/ares.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { GradesComponent } from './grades/grades.component';
import { PasserellesComponent } from './passerelles/passerelles.component';
import { CrudBarComponent } from './crud-bar/crud-bar.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './filters/filters.component';
import { GradeFiltersComponent } from './grade-filters/grade-filters.component';
import { InstitutionFiltersComponent } from './institution-filters/institution-filters.component';
import { PasserelleFiltersComponent } from './passerelle-filters/passerelle-filters.component';


@NgModule({
  declarations: [
    AresComponent,
    CrudBarComponent,
    InstitutionsComponent,
    GradesComponent,
    PasserellesComponent,
    FiltersComponent,
    GradeFiltersComponent,
    InstitutionFiltersComponent,
    PasserelleFiltersComponent
  ],
  imports: [
    CommonModule,
    AresRoutingModule,
    FormsModule
  ],
  exports: [
    AresComponent,
    FiltersComponent,
    GradeFiltersComponent,
    InstitutionFiltersComponent,
    PasserelleFiltersComponent
  ]
})
export class AresModule { }
