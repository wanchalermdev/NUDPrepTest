import { TestBed, inject } from '@angular/core/testing';

import { ManageUserAccountService } from './manage-user-account.service';

describe('ManageUserAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageUserAccountService]
    });
  });

  it('should be created', inject([ManageUserAccountService], (service: ManageUserAccountService) => {
    expect(service).toBeTruthy();
  }));
});
