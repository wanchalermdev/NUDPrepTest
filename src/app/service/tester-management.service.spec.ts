import { TestBed, inject } from '@angular/core/testing';

import { TesterManagementService } from './tester-management.service';

describe('TesterManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesterManagementService]
    });
  });

  it('should be created', inject([TesterManagementService], (service: TesterManagementService) => {
    expect(service).toBeTruthy();
  }));
});
