import { Component } from '@angular/core';

@Component({
  selector: 'app-institution-filters',
  templateUrl: './institution-filters.component.html',
  styleUrls: ['./institution-filters.component.scss']
})
export class InstitutionFiltersComponent {
    // Propriétés spécifiques aux filtres de la route institution
    actifFilter: boolean = false;
    localiteFilter: string = '';
  
    applyFilters(): void {
      // Appliquer les filtres spécifiques à la route institution
      // Émettre un événement avec les filtres appliqués
      // Par exemple : this.filterEvent.emit(filters);
    }
  
}
