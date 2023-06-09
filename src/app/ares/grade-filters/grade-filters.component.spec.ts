import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFiltersComponent } from './grade-filters.component';

describe('GradeFiltersComponent', () => {
  let component: GradeFiltersComponent;
  let fixture: ComponentFixture<GradeFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeFiltersComponent]
    });
    fixture = TestBed.createComponent(GradeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
