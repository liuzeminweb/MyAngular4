import { TestBed, inject } from '@angular/core/testing';

import { InfoModelShowService } from './info-model-show.service';

describe('InfoModelShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoModelShowService]
    });
  });

  it('should be created', inject([InfoModelShowService], (service: InfoModelShowService) => {
    expect(service).toBeTruthy();
  }));
});
