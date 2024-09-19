import { TestBed } from '@angular/core/testing';

import { ServerAccessorService } from './server-accessor.service';

describe('ServerAccessorService', () => {
  let service: ServerAccessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerAccessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
