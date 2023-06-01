import { Component } from '@angular/core';
import { DisplayService } from './services/toggle/display.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MyWay';

  display$ = this.displayService.display$;


  constructor(private displayService: DisplayService) { }

  toggleNav() {
    this.displayService.toggleDisplay();
  }

}
