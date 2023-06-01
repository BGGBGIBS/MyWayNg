import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './way-routing.module';
import { WayComponent } from './way/way.component';
import { NgChartsModule } from 'ng2-charts';
import { DayChartComponent } from './day-chart/day-chart.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { LanguesComponent } from './langues/langues.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { LearningComponent } from './learning/learning.component';
import { SkillsComponent } from './skills/skills.component';
import { SoftskillsComponent } from './softskills/softskills.component';


@NgModule({
  declarations: [
    WayComponent,
    DayChartComponent,
    PersonalInfoComponent,
    HeaderComponent,
    AboutComponent,
    LanguesComponent,
    ExperienceComponent,
    EducationComponent,
    LearningComponent,
    SkillsComponent,
    SoftskillsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgChartsModule
  ],
  exports: [
    WayComponent,
    DayChartComponent,
    PersonalInfoComponent,
    HeaderComponent,
    AboutComponent,
    LanguesComponent,
    ExperienceComponent,
    EducationComponent,
    LearningComponent,
    SkillsComponent,
    SoftskillsComponent
  ]
})
export class HomeModule { }
