import { TestBed, inject } from '@angular/core/testing';

import { ServiceConsumerService } from './service-consumer.service';

describe('ServiceConsumerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceConsumerService]
    });
  });

  it('should be created', inject([ServiceConsumerService], (service: ServiceConsumerService) => {
    expect(service).toBeTruthy();
  }));
});
