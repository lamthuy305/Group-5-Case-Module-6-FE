import { TestBed } from '@angular/core/testing';

import { InfomationSaveService } from './infomation-save.service';

describe('InfomationSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfomationSaveService = TestBed.get(InfomationSaveService);
    expect(service).toBeTruthy();
  });
});
