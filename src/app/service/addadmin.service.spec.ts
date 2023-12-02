import { TestBed } from '@angular/core/testing';

import { AddadminService } from './addadmin.service';

describe('AddadminService', () => {
  let service: AddadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
