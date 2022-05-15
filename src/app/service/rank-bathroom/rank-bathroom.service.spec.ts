import { TestBed } from '@angular/core/testing';

import { RankBathroomService } from './rank-bathroom.service';

describe('RankBathroomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RankBathroomService = TestBed.get(RankBathroomService);
    expect(service).toBeTruthy();
  });
});
