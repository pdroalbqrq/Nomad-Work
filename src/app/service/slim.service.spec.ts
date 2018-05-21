import { TestBed, inject } from '@angular/core/testing';

import { SlimService } from './slim.service';

describe('SlimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlimService]
    });
  });

  it('should be created', inject([SlimService], (service: SlimService) => {
    expect(service).toBeTruthy();
  }));
});
