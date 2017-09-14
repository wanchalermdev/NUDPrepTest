import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCenterInfoComponent } from './exam-center-info.component';

describe('ExamCenterInfoComponent', () => {
  let component: ExamCenterInfoComponent;
  let fixture: ComponentFixture<ExamCenterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamCenterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCenterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
