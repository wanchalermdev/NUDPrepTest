import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCenterRoomComponent } from './exam-center-room.component';

describe('ExamCenterRoomComponent', () => {
  let component: ExamCenterRoomComponent;
  let fixture: ComponentFixture<ExamCenterRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamCenterRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCenterRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
