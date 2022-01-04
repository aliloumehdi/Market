import { TestBed } from '@angular/core/testing';

import { DealsServicesService } from './deals-services.service';

describe('DealsServicesService', () => {
  let service: DealsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
