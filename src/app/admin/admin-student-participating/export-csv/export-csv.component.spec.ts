import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCSVComponent } from './export-csv.component';

describe('ExportCSVComponent', () => {
  let component: ExportCSVComponent;
  let fixture: ComponentFixture<ExportCSVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportCSVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
