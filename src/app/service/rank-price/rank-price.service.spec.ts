import { TestBed } from '@angular/core/testing';

import { RankPriceService } from './rank-price.service';

describe('RankPriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RankPriceService = TestBed.get(RankPriceService);
    expect(service).toBeTruthy();
  });
});
