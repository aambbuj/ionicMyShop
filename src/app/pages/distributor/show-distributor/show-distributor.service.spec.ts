import { TestBed } from '@angular/core/testing';

import { ShowDistributorService } from './show-distributor.service';

describe('ShowDistributorService', () => {
  let service: ShowDistributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowDistributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
