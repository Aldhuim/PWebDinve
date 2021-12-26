import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsEnvComponent } from './ins-env.component';

describe('InsEnvComponent', () => {
  let component: InsEnvComponent;
  let fixture: ComponentFixture<InsEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
