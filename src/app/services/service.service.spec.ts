import { TestBed } from '@angular/core/testing';

// import { ServiceService } from './service.service';
import { ProductService } from './service.service';
describe('ServiceService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
