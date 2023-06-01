import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Développeur Web Full Stack',
      company: 'TechnofuturTIC',
      startDate: '2022-12-15',
      endDate: '2023-05-23',
      location: 'Charleroi, Belgique',
    },
    {
      title: 'Stagiaire en Développement Web',
      company: 'Restomax',
      startDate: '2021-11-15',
      endDate: '2022-03-08',
      location: 'Bruxelles, Belgique',
    },
  ];
}
