import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCSVExamCenterComponent } from './export-csv-exam-center.component';

describe('ExportCSVExamCenterComponent', () => {
  let component: ExportCSVExamCenterComponent;
  let fixture: ComponentFixture<ExportCSVExamCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportCSVExamCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCSVExamCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
