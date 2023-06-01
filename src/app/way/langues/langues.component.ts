import { Component } from '@angular/core';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.component.html',
  styleUrls: ['./langues.component.scss']
})
export class LanguesComponent {
  languageSkills = [
    {
      language: 'Anglais',
      skills: [
        { category: 'Écouter', level: 'Avancé' },
        { category: 'Parler', level: 'Intermédiaire' },
        { category: 'Lire', level: 'Avancé' },
        { category: 'Écrire', level: 'Intermédiaire' },
      ],
    },
    {
      language: 'Néerlandais',
      skills: [
        { category: 'Écouter', level: 'Intermédiaire' },
        { category: 'Parler', level: 'Débutant' },
        { category: 'Lire', level: 'Intermédiaire' },
        { category: 'Écrire', level: 'Débutant' },
      ],
    },
  ];
}
