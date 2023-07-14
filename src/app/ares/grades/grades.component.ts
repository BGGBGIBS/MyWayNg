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

  pageSize: number = 20;
  pageIndex: number = 0;
  
  constructor(private aresService: AresService) {}
  sortType: SortType = 'code_etudes';
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
        // this.grades = res.results;
        this.gradesOriginal = res.results;
        this.grades = this.gradesOriginal.slice(0, this.pageSize);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des grades', err);
      },
      complete: () => {
        console.log('COMPLETE');
      },
    });
  }
  nextPage(): void {
    if (this.pageIndex < this.getLastPageIndex()) {
      this.pageIndex++;
      this.grades = this.gradesOriginal.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
    }  }

  previousPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.grades = this.gradesOriginal.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
    }
  }

  getLastPageIndex(): number {
    return Math.ceil(this.gradesOriginal.length / this.pageSize) - 1;

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
      this.gradesOriginal = this.gradesOriginal.filter(grade => grade.domaine_paysage === this.selectedDomaine);
    } else {
      this.getGrades();
    }

    this.pageIndex = 0;
    this.grades = this.gradesOriginal.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);

  }
}
