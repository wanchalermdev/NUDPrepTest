import { TestBed, inject } from '@angular/core/testing';

import { BuildingManagementService } from './building-management.service';

describe('BuildingManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildingManagementService]
    });
  });

  it('should be created', inject([BuildingManagementService], (service: BuildingManagementService) => {
    expect(service).toBeTruthy();
  }));
});
