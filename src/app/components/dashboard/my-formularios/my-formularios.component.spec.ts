import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormulariosComponent } from './my-formularios.component';

describe('MyFormulariosComponent', () => {
  let component: MyFormulariosComponent;
  let fixture: ComponentFixture<MyFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
