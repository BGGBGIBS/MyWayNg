import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  experiences: Experience[] = [];

  toggleAccordion(experience: Experience): void {
    experience.experience_isExpanded = !experience.experience_isExpanded;
  }
}
