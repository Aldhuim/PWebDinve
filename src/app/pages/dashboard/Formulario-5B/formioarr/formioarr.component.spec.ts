import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioarrComponent } from './formioarr.component';

describe('FormioarrComponent', () => {
  let component: FormioarrComponent;
  let fixture: ComponentFixture<FormioarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormioarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormioarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
