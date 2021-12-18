import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formpi4Component } from './formpi4.component';

describe('Formpi4Component', () => {
  let component: Formpi4Component;
  let fixture: ComponentFixture<Formpi4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formpi4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formpi4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
