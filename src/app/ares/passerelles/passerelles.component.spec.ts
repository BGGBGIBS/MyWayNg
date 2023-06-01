import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasserellesComponent } from './passerelles.component';

describe('PasserellesComponent', () => {
  let component: PasserellesComponent;
  let fixture: ComponentFixture<PasserellesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasserellesComponent]
    });
    fixture = TestBed.createComponent(PasserellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
