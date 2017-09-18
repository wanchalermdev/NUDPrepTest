import { TestBed, inject } from '@angular/core/testing';

import { FileManagementService } from './file-management.service';

describe('FileManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileManagementService]
    });
  });

  it('should be created', inject([FileManagementService], (service: FileManagementService) => {
    expect(service).toBeTruthy();
  }));
});
