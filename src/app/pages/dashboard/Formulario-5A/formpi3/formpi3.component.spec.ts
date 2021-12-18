import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formpi3Component } from './formpi3.component';

describe('Formpi3Component', () => {
  let component: Formpi3Component;
  let fixture: ComponentFixture<Formpi3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formpi3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formpi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
