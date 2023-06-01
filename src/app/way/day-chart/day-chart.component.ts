import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-day-chart',
  templateUrl: './day-chart.component.html',
  styleUrls: ['./day-chart.component.scss'],
})
export class DayChartComponent {
  @ViewChild('chart') private chartRef!: ElementRef;
  chart: any;

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: [
          'Sommeil',
          'Train',
          'Travail',
          'Cours du soir',
          'Train',
          'Maison',
        ],
        datasets: [
          {
            data: [5, 3, 8, 3, 3, 2],
            backgroundColor: [
              '#7E8AA2', // Gris-bleu
              '#6AB187', // Vert clair
              '#34495E', // Gris foncé
              '#E67E22', // Orange
              '#6AB187', // Vert clair (même couleur que l'autre segment "Train")
              '#A9BFD3', // Gris clair
            ],
          },
        ],
      },
      options: {},
    });
  }
}
