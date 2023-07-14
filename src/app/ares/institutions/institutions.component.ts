import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AresInstitution, SortType } from 'src/app/models/ares/institution.model';
import { AresService } from 'src/app/services/ares/ares.service';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.scss']
})
export class InstitutionsComponent{
  institutions!: AresInstitution[];

  pageSize: number = 20;
  pageIndex: number = 0;

  constructor(private aresService: AresService) {}
  sortType: SortType = 'type_d_etablissement';
  sortReverse: boolean = false;
  institutionsSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.getInstitutions();
  }
  ngOnDestroy(): void {
    if (this.institutionsSubscription) {
      this.institutionsSubscription.unsubscribe();
    }
  }

  getInstitutions(): void {
    this.institutionsSubscription = this.aresService.getAresInstitutions().subscribe({
      next: (res) => {
        console.log('NEXT', res);
        this.institutions = res.results;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des institutions', err);
      },
      complete: () => {
        console.log('COMPLETE');
      },
    });
  }
  nextPage(): void {
    this.pageIndex++;
  }

  previousPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
    }
  }

  getLastPageIndex(): number {
    return Math.ceil(this.institutions.length / this.pageSize) - 1;
  }
  sort(sortType: SortType) {
    if (this.sortType === sortType) {
      this.sortReverse = !this.sortReverse;
    } else {
      this.sortType = sortType;
      this.sortReverse = false;
    }

    this.institutions.sort((a, b) => {
      if (a[this.sortType] < b[this.sortType]) return this.sortReverse ? 1 : -1;
      if (a[this.sortType] > b[this.sortType]) return this.sortReverse ? -1 : 1;
      return 0;
    });
  }
  
}
