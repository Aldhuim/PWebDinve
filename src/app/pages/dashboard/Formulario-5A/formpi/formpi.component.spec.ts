import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpiComponent } from './formpi.component';

describe('FormpiComponent', () => {
  let component: FormpiComponent;
  let fixture: ComponentFixture<FormpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
