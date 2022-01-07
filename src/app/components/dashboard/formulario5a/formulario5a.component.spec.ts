import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario5aComponent } from './formulario5a.component';

describe('Formulario5aComponent', () => {
  let component: Formulario5aComponent;
  let fixture: ComponentFixture<Formulario5aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario5aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
