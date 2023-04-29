import { TestBed } from '@angular/core/testing';

import { PruebaMainService } from './prueba-main.service';

describe('PruebaMainService', () => {
  let service: PruebaMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
