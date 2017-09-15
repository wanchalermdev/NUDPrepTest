import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCenterBuildingComponent } from './exam-center-building.component';

describe('ExamCenterBuildingComponent', () => {
  let component: ExamCenterBuildingComponent;
  let fixture: ComponentFixture<ExamCenterBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamCenterBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCenterBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
