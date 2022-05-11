import { TestBed } from '@angular/core/testing';

import { StatusHouseService } from './status-house.service';

describe('StatusHouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusHouseService = TestBed.get(StatusHouseService);
    expect(service).toBeTruthy();
  });
});
