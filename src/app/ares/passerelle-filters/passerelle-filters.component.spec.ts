import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasserelleFiltersComponent } from './passerelle-filters.component';

describe('PasserelleFiltersComponent', () => {
  let component: PasserelleFiltersComponent;
  let fixture: ComponentFixture<PasserelleFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasserelleFiltersComponent]
    });
    fixture = TestBed.createComponent(PasserelleFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
