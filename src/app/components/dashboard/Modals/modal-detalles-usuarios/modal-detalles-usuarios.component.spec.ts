import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetallesUsuariosComponent } from './modal-detalles-usuarios.component';

describe('ModalDetallesUsuariosComponent', () => {
  let component: ModalDetallesUsuariosComponent;
  let fixture: ComponentFixture<ModalDetallesUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetallesUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetallesUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
