import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInsComponent } from './ver-ins.component';

describe('VerInsComponent', () => {
  let component: VerInsComponent;
  let fixture: ComponentFixture<VerInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerInsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
