import { Component, inject, Input } from '@angular/core';
import { EducationService } from 'src/app/services/education/education.service';
import { Education } from 'src/app/models/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations: Education[] = [];

  toggleAccordion(education: Education): void {
    education.education_isExpanded = !education.education_isExpanded;
  }
    
}