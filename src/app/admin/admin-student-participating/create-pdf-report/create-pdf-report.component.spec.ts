import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePDFReportComponent } from './create-pdf-report.component';

describe('CreatePDFReportComponent', () => {
  let component: CreatePDFReportComponent;
  let fixture: ComponentFixture<CreatePDFReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePDFReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePDFReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
