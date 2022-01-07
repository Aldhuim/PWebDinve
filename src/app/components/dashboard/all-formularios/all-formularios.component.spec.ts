import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFormulariosComponent } from './all-formularios.component';

describe('AllFormulariosComponent', () => {
  let component: AllFormulariosComponent;
  let fixture: ComponentFixture<AllFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
