import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFReportCommitteeComponent } from './pdf-report-committee.component';

describe('PDFReportCommitteeComponent', () => {
  let component: PDFReportCommitteeComponent;
  let fixture: ComponentFixture<PDFReportCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDFReportCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDFReportCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
