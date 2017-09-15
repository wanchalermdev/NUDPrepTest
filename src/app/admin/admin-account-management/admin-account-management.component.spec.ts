import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountManagementComponent } from './admin-account-management.component';

describe('AdminAccountManagementComponent', () => {
  let component: AdminAccountManagementComponent;
  let fixture: ComponentFixture<AdminAccountManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccountManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
