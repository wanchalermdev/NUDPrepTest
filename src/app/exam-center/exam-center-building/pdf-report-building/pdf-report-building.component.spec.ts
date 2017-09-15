import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFReportBuildingComponent } from './pdf-report-building.component';

describe('PDFReportBuildingComponent', () => {
  let component: PDFReportBuildingComponent;
  let fixture: ComponentFixture<PDFReportBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDFReportBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDFReportBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
