import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formpi2Component } from './formpi2.component';

describe('Formpi2Component', () => {
  let component: Formpi2Component;
  let fixture: ComponentFixture<Formpi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formpi2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formpi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
