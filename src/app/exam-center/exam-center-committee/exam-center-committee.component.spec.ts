import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCenterCommitteeComponent } from './exam-center-committee.component';

describe('ExamCenterCommitteeComponent', () => {
  let component: ExamCenterCommitteeComponent;
  let fixture: ComponentFixture<ExamCenterCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamCenterCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCenterCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
