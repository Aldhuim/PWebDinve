import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetallesFormulariosComponent } from './ver-detalles-formularios.component';

describe('VerDetallesFormulariosComponent', () => {
  let component: VerDetallesFormulariosComponent;
  let fixture: ComponentFixture<VerDetallesFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDetallesFormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDetallesFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
