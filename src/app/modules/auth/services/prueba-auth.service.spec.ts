import { TestBed } from '@angular/core/testing';

import { PruebaAuthService } from './prueba-auth.service';

describe('PruebaAuthService', () => {
  let service: PruebaAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
