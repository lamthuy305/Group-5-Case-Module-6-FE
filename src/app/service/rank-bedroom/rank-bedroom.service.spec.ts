import { TestBed } from '@angular/core/testing';

import { RankBedroomService } from './rank-bedroom.service';

describe('RankBedroomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RankBedroomService = TestBed.get(RankBedroomService);
    expect(service).toBeTruthy();
  });
});
