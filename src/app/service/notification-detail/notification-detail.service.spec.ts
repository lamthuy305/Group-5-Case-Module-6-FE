import { TestBed } from '@angular/core/testing';

import { NotificationDetailService } from './notification-detail.service';

describe('NotificationDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationDetailService = TestBed.get(NotificationDetailService);
    expect(service).toBeTruthy();
  });
});
