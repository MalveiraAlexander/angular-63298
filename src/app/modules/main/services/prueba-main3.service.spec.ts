import { TestBed } from '@angular/core/testing';

import { PruebaMain3Service } from './prueba-main3.service';

describe('PruebaMain3Service', () => {
  let service: PruebaMain3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaMain3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
