import { Component } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EDUCATIONS } from 'src/assets/data/education-data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations = EDUCATIONS;
  educationGroups: Education[][] = []; // Les groupes d'éducations qui se chevauchent

  ngOnInit() {
    // Convertir les chaînes de caractères en dates et trier les éducations par date de début
    this.educations.sort((a, b) => {
      const startDateA = new Date(a.education_startYear);
      const startDateB = new Date(b.education_startYear);
      return startDateB.getTime() - startDateA.getTime(); // Inversion de l'ordre
    });
  
    this.educationGroups = this.groupEducations(this.educations); // Groupez les éducations qui se chevauchent
  }
  

  groupEducations(educations: Education[]): Education[][] {
    const groups: Education[][] = [];

    for (const ed of educations) {
      let addedToGroup = false;
      
      // Essayez de l'ajouter à un groupe existant
      for (const group of groups) {
        const lastInGroup = group[group.length - 1];
        if (ed.education_startYear < lastInGroup.education_endYear) { // Il y a un chevauchement
          group.push(ed);
          addedToGroup = true;
          break;
        }
      }

      // Si l'éducation n'a pas été ajoutée à un groupe existant, créez un nouveau groupe
      if (!addedToGroup) {
        groups.push([ed]);
      }
    }

    return groups;
  }

  getWidthOfGroup(group: Education[]): string {
    let overlapDurationInYears = 0;

    for (let i = 0; i < group.length - 1; i++) {
      const endDate = new Date(group[i].education_endYear);
      const nextStartDate = new Date(group[i + 1].education_startYear);
      
      overlapDurationInYears += Math.abs(endDate.getFullYear() - nextStartDate.getFullYear());
   
      // overlapDurationInYears += Math.abs(group[i].education_endYear.getFullYear() - group[i + 1].education_startYear.getFullYear());
    }

    return overlapDurationInYears * 100 + '%'; // Convertissez la durée du chevauchement en pourcentage pour la largeur CSS
  }
  
}
