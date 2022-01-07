import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearfipComponent } from './crearfip.component';

describe('CrearfipComponent', () => {
  let component: CrearfipComponent;
  let fixture: ComponentFixture<CrearfipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearfipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearfipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
