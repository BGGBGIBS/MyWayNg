import { Component } from '@angular/core';

@Component({
  selector: 'app-softskills',
  templateUrl: './softskills.component.html',
  styleUrls: ['./softskills.component.scss']
})
export class SoftskillsComponent {
  personalityTraits = [
    'Curiosité',
    'Autonomie',
    'Courage',
    'Adaptabilité',
    'Rigueur',
    'Créativité',
    'Organisation',
  ];
}
