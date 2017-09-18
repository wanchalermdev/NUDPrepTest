import { TestBed, inject } from '@angular/core/testing';

import { CommitteeManagementService } from './committee-management.service';

describe('CommitteeManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommitteeManagementService]
    });
  });

  it('should be created', inject([CommitteeManagementService], (service: CommitteeManagementService) => {
    expect(service).toBeTruthy();
  }));
});
