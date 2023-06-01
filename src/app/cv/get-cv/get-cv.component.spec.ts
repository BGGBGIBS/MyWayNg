import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCvComponent } from './get-cv.component';

describe('GetCvComponent', () => {
  let component: GetCvComponent;
  let fixture: ComponentFixture<GetCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
