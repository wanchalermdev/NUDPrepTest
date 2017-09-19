import { Component, OnInit } from '@angular/core';
import { BuildingManagementService } from '../../../service/building-management.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-building',
  templateUrl: './view-building.component.html',
  styleUrls: ['./view-building.component.css']
})
export class ViewBuildingComponent implements OnInit {
  building_name;
  constructor(private buildingManagement: BuildingManagementService, private activatedRoute: ActivatedRoute) {
    const myId = this.activatedRoute.snapshot.params.id;
    const _school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const preParam = {
      id: myId,
      school_id: _school_id
    };
    this.buildingManagement.getBuilding(preParam).then(response => {
      this.building_name = response['building_name'];
    });
  }

  ngOnInit() {
  }

}
