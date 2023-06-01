import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }
  private displaySource = new BehaviorSubject<boolean>(false);
  display$ = this.displaySource.asObservable();

  toggleDisplay() {
    this.displaySource.next(!this.displaySource.value);
  }
}
