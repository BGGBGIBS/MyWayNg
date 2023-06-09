import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBarComponent } from './crud-bar.component';

describe('CrudBarComponent', () => {
  let component: CrudBarComponent;
  let fixture: ComponentFixture<CrudBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
