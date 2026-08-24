import { TestBed } from '@angular/core/testing';

import { ServiceJob } from './job';

describe('Job', () => {
  let service: ServiceJob;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceJob);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
