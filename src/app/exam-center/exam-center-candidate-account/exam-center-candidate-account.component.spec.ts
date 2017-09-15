import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCenterCandidateAccountComponent } from './exam-center-candidate-account.component';

describe('ExamCenterCandidateAccountComponent', () => {
  let component: ExamCenterCandidateAccountComponent;
  let fixture: ComponentFixture<ExamCenterCandidateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamCenterCandidateAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCenterCandidateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
