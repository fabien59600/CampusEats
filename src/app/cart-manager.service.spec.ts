import { TestBed } from '@angular/core/testing';

import { CartManagerService } from './cart-manager.service';

describe('CartManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartManagerService = TestBed.get(CartManagerService);
    expect(service).toBeTruthy();
  });
});
