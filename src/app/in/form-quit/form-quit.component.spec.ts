import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuitComponent } from './form-quit.component';

describe('FormQuitComponent', () => {
  let component: FormQuitComponent;
  let fixture: ComponentFixture<FormQuitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormQuitComponent]
    });
    fixture = TestBed.createComponent(FormQuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
