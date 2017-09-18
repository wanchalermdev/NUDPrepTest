import { Component, OnInit } from '@angular/core';
import { BuildingManagementService } from '../../../service/building-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-building',
  templateUrl: './edit-building.component.html',
  styleUrls: ['./edit-building.component.css']
})
export class EditBuildingComponent implements OnInit {
  private myId;
  building_name;
  constructor(private buildingManagement: BuildingManagementService, private activatedRoute: ActivatedRoute, private _router: Router) { 
    this.myId = this.activatedRoute.snapshot.params.id;
    const preParam = {
      id: this.myId
    };
    this.buildingManagement.getBuilding(preParam).then(response => {
      this.building_name = response['building_name'];
    });
  }

  ngOnInit() {
  }

  editBuilding(elem){
    elem.preventDefault();
    const data = elem.target.elements;
    const preParam = {
      id: this.myId,
      building_name: data.building_name.value
    };
    this.buildingManagement.editBuilding(preParam).then((response) => {
      this._router.navigateByUrl('/examCenter/building');
    });
  }

}
