import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formioarr3Component } from './formioarr3.component';

describe('Formioarr3Component', () => {
  let component: Formioarr3Component;
  let fixture: ComponentFixture<Formioarr3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formioarr3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formioarr3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
