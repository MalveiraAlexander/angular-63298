import { TestBed } from '@angular/core/testing';

import { PruebaSharedService } from './prueba-shared.service';

describe('PruebaSharedService', () => {
  let service: PruebaSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
