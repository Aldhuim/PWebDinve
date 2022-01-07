import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario5bComponent } from './formulario5b.component';

describe('Formulario5bComponent', () => {
  let component: Formulario5bComponent;
  let fixture: ComponentFixture<Formulario5bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario5bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario5bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
