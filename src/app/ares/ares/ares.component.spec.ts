import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AresComponent } from './ares.component';

describe('AresComponent', () => {
  let component: AresComponent;
  let fixture: ComponentFixture<AresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AresComponent]
    });
    fixture = TestBed.createComponent(AresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
