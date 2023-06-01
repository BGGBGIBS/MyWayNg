import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  specificDate = new Date(2023, 4, 17);
  signature = "MyWay by Baptiste Grosjean — All rights reserved.";
}
