import { TestBed } from '@angular/core/testing';

import { ShareJSService } from './share-js.service';

describe('ShareJSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareJSService = TestBed.get(ShareJSService);
    expect(service).toBeTruthy();
  });
});
