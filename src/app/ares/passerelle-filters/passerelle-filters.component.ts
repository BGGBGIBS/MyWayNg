import { Component } from '@angular/core';

@Component({
  selector: 'app-passerelle-filters',
  templateUrl: './passerelle-filters.component.html',
  styleUrls: ['./passerelle-filters.component.scss']
})
export class PasserelleFiltersComponent {
    // Propriétés spécifiques aux filtres de la route passerelle
    intituleEtudesBachelierFilter: string = '';
    intituleEtudesMasterFilter: string = '';
  
    applyFilters(): void {
      // Appliquer les filtres spécifiques à la route passerelle
      // Émettre un événement avec les filtres appliqués
      // Par exemple : this.filterEvent.emit(filters);
    }
  
}
