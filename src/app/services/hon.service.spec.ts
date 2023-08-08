import { TestBed } from '@angular/core/testing';

import { HonService } from './hon.service';

describe('HonService', () => {
  let service: HonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
