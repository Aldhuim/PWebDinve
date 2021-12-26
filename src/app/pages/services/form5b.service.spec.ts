import { TestBed } from '@angular/core/testing';

import { Form5bService } from './form5b.service';

describe('Form5bService', () => {
  let service: Form5bService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Form5bService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
