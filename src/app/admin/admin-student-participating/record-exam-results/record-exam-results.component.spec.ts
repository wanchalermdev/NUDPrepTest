import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordExamResultsComponent } from './record-exam-results.component';

describe('RecordExamResultsComponent', () => {
  let component: RecordExamResultsComponent;
  let fixture: ComponentFixture<RecordExamResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordExamResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordExamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
