import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingManagementService } from '../../../service/building-management.service';
@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {
  private selectSchool;

  constructor(private buildingManagement: BuildingManagementService, private _router: Router) {
    this.selectSchool = null;
    this.selectSchool = window.sessionStorage.getItem('PSN_SCHOOL_ID');

   }

  ngOnInit() {
  }

  createBuilding(elem){
    elem.preventDefault();

    const dataForm = elem.target.elements;
    console.log(dataForm);
    let preParam = {
      building_name: dataForm.building_name.value,
      school_id: this.selectSchool
    };

    this.buildingManagement.createBuilding(preParam).then(response => {
      this._router.navigateByUrl('/examCenter/building');
    });
  }

}
