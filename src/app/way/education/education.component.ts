import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations = [
    {
      degree: 'Master en Sciences Informatiques',
      institution: 'UMons',
      startDate: '2022-10-10',
      endDate: '2026-06-30',
      location: 'Charleroi, Belgique',
      type: 'night'
    },
    {
      degree: 'Bachelier Professionnalisant en Informatique de Gestion',
      institution: 'EPHEC-EPS',
      startDate: '2018-09-01',
      endDate: '2022-10-10',
      location: 'Bruxelles, Belgique',
      type: 'night'

    },
    {
      degree: 'C.E.S.S. Transition Générale Maths & Langues Modernes',
      institution: 'Centre Scolaire Saint-Adrien Val Duchesse',
      startDate:'2013-09-01',
      endDate: '2015-06-30',
      location: 'Bruxelles, Belgique',
      type: 'day'
    },
    {
      degree: '4e Transition Technique Sciences Appliquées & Langues Modernes',
      institution: 'Centre Scolaire Saint-Adrien Val Duchesse',
      startDate:'2012-09-01',
      endDate: '2013-06-30',
      location: 'Bruxelles, Belgique',
      type: 'day'
    },
  ];
}
