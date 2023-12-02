import { TestBed } from '@angular/core/testing';

import { ViewproductService } from './viewproduct.service';

describe('ViewproductService', () => {
  let service: ViewproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
