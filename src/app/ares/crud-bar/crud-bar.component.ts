import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AresDomaine } from 'src/app/models/ares/domaine.model';
import { AresService } from 'src/app/services/ares/ares.service';

@Component({
  selector: 'app-crud-bar',
  templateUrl: './crud-bar.component.html',
  styleUrls: ['./crud-bar.component.scss']
})
export class CrudBarComponent {
  domaines!: AresDomaine[];
  @Output() filterEvent = new EventEmitter<string>();

  selectedDomaine: string= '';

  constructor(private aresService: AresService) { }

  ngOnInit(): void {
    this.getDomainesPaysage();
  }
  getDomainesPaysage(): void {
    this.aresService.getAresDomaines().subscribe({
      next: (res) => {
        console.log('NEXT', res);
        this.domaines = [{domaine_paysage: '' }, ...res.results];
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des domaines paysages', err);
      },
      complete: () => {
        console.log('COMPLETE');
      },
    });
  }
  filter() {
    this.filterEvent.emit(this.selectedDomaine);
  }
  
}
