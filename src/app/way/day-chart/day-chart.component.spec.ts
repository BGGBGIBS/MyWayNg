import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayChartComponent } from './day-chart.component';

describe('DayChartComponent', () => {
  let component: DayChartComponent;
  let fixture: ComponentFixture<DayChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayChartComponent]
    });
    fixture = TestBed.createComponent(DayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
