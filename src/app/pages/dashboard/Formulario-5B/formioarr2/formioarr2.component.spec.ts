import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formioarr2Component } from './formioarr2.component';

describe('Formioarr2Component', () => {
  let component: Formioarr2Component;
  let fixture: ComponentFixture<Formioarr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formioarr2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formioarr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
