import { Component, OnInit } from '@angular/core';
import { BuildingManagementService } from '../../../service/building-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-building',
  templateUrl: './delete-building.component.html',
  styleUrls: ['./delete-building.component.css']
})
export class DeleteBuildingComponent implements OnInit {

  private myId;
  buildingData;
  constructor(private buildingManagement: BuildingManagementService, private _router: Router, private activatedRoute: ActivatedRoute) {
    this.myId = this.activatedRoute.snapshot.params.id;
    const preParam = {
      id: this.myId
    };
    this.buildingData = this.buildingManagement.getBuilding(preParam).then(response => {
      this.buildingData = response['building_name'];
    });
   }

  ngOnInit() {
  }

  deleteBuilding(elem) {
    elem.preventDefault();
    const preParam = {
      id: this.myId
    };
    this.buildingManagement.deleteBuilding(preParam).then(response => {
      this._router.navigateByUrl('/examCenter/building');
    });
  }

}
