import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AresPasserelle, SortType } from 'src/app/models/ares/passerelle.model';
import { AresService } from 'src/app/services/ares/ares.service';

@Component({
  selector: 'app-passerelles',
  templateUrl: './passerelles.component.html',
  styleUrls: ['./passerelles.component.scss']
})
export class PasserellesComponent {
  passerelles!: AresPasserelle[];
  sortType: SortType = 'code_etudes_bachelier';
  sortReverse: boolean = false;
  passerellesSubscription: Subscription | undefined;


  pageSize: number = 20;
  pageIndex: number = 0;


  constructor(private aresService: AresService) {}

  ngOnInit(): void {
    this.getpasserelles();
  }
  ngOnDestroy(): void {
    if (this.passerellesSubscription) {
      this.passerellesSubscription.unsubscribe();
    }
  }

  getpasserelles(): void {
    this.passerellesSubscription = this.aresService.getAresPasserelles().subscribe({
      next: (res) => {
        console.log('NEXT', res);
        this.passerelles = res.results;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des passerelles', err);
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
    return Math.ceil(this.passerelles.length / this.pageSize) - 1;
  }
  sort(sortType: SortType) {
    if (this.sortType === sortType) {
      this.sortReverse = !this.sortReverse;
    } else {
      this.sortType = sortType;
      this.sortReverse = false;
    }

    this.passerelles.sort((a, b) => {
      if (a[this.sortType] < b[this.sortType]) return this.sortReverse ? 1 : -1;
      if (a[this.sortType] > b[this.sortType]) return this.sortReverse ? -1 : 1;
      return 0;
    });
  }


}
