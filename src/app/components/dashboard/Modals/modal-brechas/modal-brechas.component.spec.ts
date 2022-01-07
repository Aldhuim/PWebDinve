import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBrechasComponent } from './modal-brechas.component';

describe('ModalBrechasComponent', () => {
  let component: ModalBrechasComponent;
  let fixture: ComponentFixture<ModalBrechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBrechasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBrechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
