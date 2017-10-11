import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { UploadFileService } from '../../service/upload-file.service';

@Component({
  selector: 'app-upload-file-transfer-slip',
  templateUrl: './upload-file-transfer-slip.component.html',
  styleUrls: ['./upload-file-transfer-slip.component.css']
})
export class UploadFileTransferSlipComponent implements OnInit {

  constructor(private uploadFile: UploadFileService) { }

  @ViewChild('fileInput') fileInput;

  ngOnInit() {
  }

  upload() {

  }
}
