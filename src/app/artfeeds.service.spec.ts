import { TestBed } from '@angular/core/testing';

import { ArtfeedsService } from './artfeeds.service';

describe('ArtfeedsService', () => {
  let service: ArtfeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtfeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
