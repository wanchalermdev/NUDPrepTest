import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileTransferSlipComponent } from './upload-file-transfer-slip.component';

describe('UploadFileTransferSlipComponent', () => {
  let component: UploadFileTransferSlipComponent;
  let fixture: ComponentFixture<UploadFileTransferSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileTransferSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileTransferSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
