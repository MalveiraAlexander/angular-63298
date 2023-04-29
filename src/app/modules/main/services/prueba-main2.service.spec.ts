import { TestBed } from '@angular/core/testing';

import { PruebaMain2Service } from './prueba-main2.service';

describe('PruebaMain2Service', () => {
  let service: PruebaMain2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaMain2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
