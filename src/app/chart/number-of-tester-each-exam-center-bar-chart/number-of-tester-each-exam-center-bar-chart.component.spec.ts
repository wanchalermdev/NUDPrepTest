import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfTesterEachExamCenterBarChartComponent } from './number-of-tester-each-exam-center-bar-chart.component';

describe('NumberOfTesterEachExamCenterBarChartComponent', () => {
  let component: NumberOfTesterEachExamCenterBarChartComponent;
  let fixture: ComponentFixture<NumberOfTesterEachExamCenterBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOfTesterEachExamCenterBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfTesterEachExamCenterBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
