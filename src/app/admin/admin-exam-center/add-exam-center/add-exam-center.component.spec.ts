import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamCenterComponent } from './add-exam-center.component';

describe('AddExamCenterComponent', () => {
  let component: AddExamCenterComponent;
  let fixture: ComponentFixture<AddExamCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExamCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExamCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
