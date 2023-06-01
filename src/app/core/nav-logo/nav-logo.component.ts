import { Component } from '@angular/core';
import { DisplayService } from 'src/app/services/toggle/display.service';

@Component({
  selector: 'app-nav-logo',
  templateUrl: './nav-logo.component.html',
  styleUrls: ['./nav-logo.component.scss']
})
export class NavLogoComponent {
display$ = this.displayService.display$;
  constructor(private displayService: DisplayService) {}

  toggleDisplay() {
    this.displayService.toggleDisplay();
  }

}
