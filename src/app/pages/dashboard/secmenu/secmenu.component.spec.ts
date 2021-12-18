import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecmenuComponent } from './secmenu.component';

describe('SecmenuComponent', () => {
  let component: SecmenuComponent;
  let fixture: ComponentFixture<SecmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
