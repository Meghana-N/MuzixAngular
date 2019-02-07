import { TestBed } from '@angular/core/testing';

import { SearchTrackService } from './search-track.service';

describe('SearchTrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchTrackService = TestBed.get(SearchTrackService);
    expect(service).toBeTruthy();
  });
});
