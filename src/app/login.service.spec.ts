import { TestBed } from '@angular/core/testing';

import { Sample } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Sample = TestBed.get(Sample);
    expect(service).toBeTruthy();
  });
});
