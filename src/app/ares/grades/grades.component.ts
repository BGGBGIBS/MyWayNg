import { Component, Input, Output } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { AresGrade, SortType } from 'src/app/models/ares/grade.model';
import { AresService } from 'src/app/services/ares/ares.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent {
  grades!: AresGrade[];
  gradesOriginal!: AresGrade[];

  @Input() selectedDomaine: string= '';
  
  constructor(private aresService: AresService) {}
  sortType: SortType = 'grade_academique';
  sortReverse: boolean = false;
  gradesSubscription: Subscription | undefined;


  ngOnInit(): void {
    this.getGrades();
  }
  ngOnDestroy(): void {
    if (this.gradesSubscription) {
      this.gradesSubscription.unsubscribe();
    }
  }

  getGrades(): void {
    this.gradesSubscription = this.aresService.getAresGrades().subscribe({
      next: (res) => {
        console.log('NEXT', res);
        this.grades = res.results;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des grades', err);
      },
      complete: () => {
        console.log('COMPLETE');
      },
    });
  }
  sort(sortType: SortType) {
    if (this.sortType === sortType) {
      this.sortReverse = !this.sortReverse;
    } else {
      this.sortType = sortType;
      this.sortReverse = false;
    }

    this.grades.sort((a, b) => {
      if (a[this.sortType] < b[this.sortType]) return this.sortReverse ? 1 : -1;
      if (a[this.sortType] > b[this.sortType]) return this.sortReverse ? -1 : 1;
      return 0;
    });
  }
  filter(selectedDomaine: string) {
    if (this.selectedDomaine !== '') {
        this.grades = this.grades.filter(grade => grade.domaine_paysage === this.selectedDomaine);
    } else {
        // Remettre tous les résultats si aucun domaine paysage n'est sélectionné
        this.grades = this.gradesOriginal;
    }
  }
}
