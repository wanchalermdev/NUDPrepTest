import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExamCenterComponent } from './admin-exam-center.component';

describe('AdminExamCenterComponent', () => {
  let component: AdminExamCenterComponent;
  let fixture: ComponentFixture<AdminExamCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExamCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExamCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
