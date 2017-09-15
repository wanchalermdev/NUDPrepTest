import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExamCenterComponent } from './edit-exam-center.component';

describe('EditExamCenterComponent', () => {
  let component: EditExamCenterComponent;
  let fixture: ComponentFixture<EditExamCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExamCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExamCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
