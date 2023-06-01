import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AresService } from 'src/app/services/ares/ares.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  
  activeRoute: string = '';
  isGradeRoute: boolean = false;
  isPasserelleRoute: boolean = false;
  isInstitutionRoute: boolean = false;

  // Propriétés spécifiques aux filtres
  actifFilter: boolean = false;
  localiteFilter: string = '';
  cycleFilter: string = '';
  typeEtablissementFilter: string = '';
  domainePaysageFilter: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let url = this.route.snapshot.url;  // Obtenez l'URL actuelle en tant qu'array d'objets `UrlSegment`
    console.log(url);

    let queryParams = this.route.snapshot.queryParams;  // Obtenez les paramètres de requête
    console.log(queryParams);

    let fragment = this.route.snapshot.fragment;  // Obtenez le fragment (la partie après '#')
    console.log(fragment);
  }

  updateFilters(): void {
    // Réinitialiser tous les filtres
    this.actifFilter = false;
    this.localiteFilter = '';
    this.cycleFilter = '';
    this.typeEtablissementFilter = '';
    this.domainePaysageFilter = '';

    // Mise à jour des filtres en fonction de la route active
    switch (this.activeRoute) {
      case 'grade':
        this.isGradeRoute = true;
        // Définir les filtres spécifiques à la route grade
        break;
      case 'passerelle':
        this.isPasserelleRoute = true;
        // Définir les filtres spécifiques à la route passerelle
        break;
      case 'institution':
        this.isInstitutionRoute = true;
        // Définir les filtres spécifiques à la route institution
        break;
      default:
        break;
    }
  }

  applyFilters(): void {
    // Appliquer les filtres et émettre un événement pour informer le composant parent
    const filters = {
      actif: this.actifFilter,
      localite: this.localiteFilter,
      cycle: this.cycleFilter,
      typeEtablissement: this.typeEtablissementFilter,
      domainePaysage: this.domainePaysageFilter
    };

    // Émettre un événement avec les filtres appliqués
    // this.filterEvent.emit(filters);
  }

}
