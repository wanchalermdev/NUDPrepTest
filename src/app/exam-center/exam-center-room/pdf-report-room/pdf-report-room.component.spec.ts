import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFReportRoomComponent } from './pdf-report-room.component';

describe('PDFReportRoomComponent', () => {
  let component: PDFReportRoomComponent;
  let fixture: ComponentFixture<PDFReportRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDFReportRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDFReportRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
