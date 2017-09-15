import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentParticipatingComponent } from './admin-student-participating.component';

describe('AdminStudentParticipatingComponent', () => {
  let component: AdminStudentParticipatingComponent;
  let fixture: ComponentFixture<AdminStudentParticipatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentParticipatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentParticipatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
