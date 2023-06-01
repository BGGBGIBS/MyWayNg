import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { HardskillsComponent } from './hardskills/hardskills.component';
import { SoftskillsComponent } from './softskills/softskills.component';
import { LanguesComponent } from './langues/langues.component';


@NgModule({
  declarations: [
    SkillsComponent,
    HardskillsComponent,
    SoftskillsComponent,
    LanguesComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ],
  exports: [
    SkillsComponent,
    HardskillsComponent,
    SoftskillsComponent,
    LanguesComponent
  ]
})
export class SkillsModule { }
