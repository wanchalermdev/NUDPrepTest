import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExamCenterComponent } from './delete-exam-center.component';

describe('DeleteExamCenterComponent', () => {
  let component: DeleteExamCenterComponent;
  let fixture: ComponentFixture<DeleteExamCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteExamCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExamCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
