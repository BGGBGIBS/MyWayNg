import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent {
  learnings = [
    'BaseX',
    'C',
    'Python',
    'Docker',
    'Blockchain'
  ];
}
