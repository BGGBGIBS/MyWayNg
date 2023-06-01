import { Component } from '@angular/core';

@Component({
  selector: 'app-ares',
  templateUrl: './ares.component.html',
  styleUrls: ['./ares.component.scss']
})
export class AresComponent {
  selectedDomaine: string = '';

  onFilterEvent(domaine: string) {
    this.selectedDomaine = domaine;
  }
  passerelles: any[] = []; // Remplacez le type par votre modèle de données approprié
  etudes: any[] = []; // Remplacez le type par votre modèle de données approprié
  filteredPasserelles: any[] = []; // Remplacez le type par votre modèle de données approprié
  filteredEtudes: any[] = []; // Remplacez le type par votre modèle de données approprié

  appliquerFiltres(filtres: any): void {
    // Filtrer les passerelles en fonction des filtres sélectionnés
    this.filteredPasserelles = this.passerelles.filter((passerelle: any) => {
      if (filtres.filtre1erCycle && passerelle.cycle !== '1er cycle') {
        return false;
      }
      if (filtres.filtrePasserellesTelephoneMaster && !passerelle.telephoneMaster) {
        return false;
      }
      // Ajoutez d'autres conditions de filtrage selon vos besoins
      return true;
    });

    // Filtrer les études en fonction des filtres sélectionnés
    this.filteredEtudes = this.etudes.filter((etude: any) => {
      if (filtres.filtre1erCycle && etude.cycle !== '1er cycle') {
        return false;
      }
      // Ajoutez d'autres conditions de filtrage selon vos besoins
      return true;
    });
  }
}
