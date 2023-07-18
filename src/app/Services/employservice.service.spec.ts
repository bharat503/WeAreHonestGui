import { TestBed } from '@angular/core/testing';

import { EmployserviceService } from './employservice.service';

describe('EmployserviceService', () => {
  let service: EmployserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
