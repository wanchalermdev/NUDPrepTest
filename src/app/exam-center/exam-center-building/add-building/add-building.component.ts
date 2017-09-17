import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingManagementService } from '../../../service/building-management.service';
import { SchoolManagementService } from '../../../service/school-management.service';
@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {
  private myDataSource = {};
  private schoolDatasource = {};
  private selectSchool;

  constructor(private buildingManagement: BuildingManagementService, private _router: Router, private schoolManagement: SchoolManagementService) {
    this.selectSchool = null;
    this.schoolManagement.getAllSchool().then(response =>{
      console.log(response);
      console.log(window.sessionStorage.getItem('school_id'));
      this.schoolDatasource = response;
    });
   }

  ngOnInit() {
  }

  createBuilding(elem){

  }

}
