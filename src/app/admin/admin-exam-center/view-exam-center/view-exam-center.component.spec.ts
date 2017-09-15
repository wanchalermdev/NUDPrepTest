import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExamCenterComponent } from './view-exam-center.component';

describe('ViewExamCenterComponent', () => {
  let component: ViewExamCenterComponent;
  let fixture: ComponentFixture<ViewExamCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExamCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExamCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
