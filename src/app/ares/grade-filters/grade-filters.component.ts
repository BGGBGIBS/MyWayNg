import { Component } from '@angular/core';

@Component({
  selector: 'app-grade-filters',
  templateUrl: './grade-filters.component.html',
  styleUrls: ['./grade-filters.component.scss']
})
export class GradeFiltersComponent {
    // Propriétés spécifiques aux filtres de la route grade
    cycleFilter: string = '';
    typeEtablissementFilter: string = '';
    domainePaysageFilter: string = '';
  
    applyFilters(): void {
      // Appliquer les filtres spécifiques à la route grade
      // Émettre un événement avec les filtres appliqués
      // Par exemple : this.filterEvent.emit(filters);
    }
}
