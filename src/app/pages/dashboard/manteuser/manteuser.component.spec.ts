import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteuserComponent } from './manteuser.component';

describe('ManteuserComponent', () => {
  let component: ManteuserComponent;
  let fixture: ComponentFixture<ManteuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManteuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManteuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
