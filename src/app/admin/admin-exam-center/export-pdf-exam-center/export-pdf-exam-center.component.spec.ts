import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPDFExamCenterComponent } from './export-pdf-exam-center.component';

describe('ExportPDFExamCenterComponent', () => {
  let component: ExportPDFExamCenterComponent;
  let fixture: ComponentFixture<ExportPDFExamCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPDFExamCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPDFExamCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
