import { Component, OnInit } from '@angular/core';
import { CommitteeManagementService } from '../../../service/committee-management.service';
import { BuildingManagementService } from '../../../service/building-management.service';
import { RoomManagementService } from '../../../service/room-management.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-committee',
  templateUrl: './view-committee.component.html',
  styleUrls: ['./view-committee.component.css']
})
export class ViewCommitteeComponent implements OnInit {

  private name;
  private room;
  private building;
  private myId;
  private _school_id;

  private responseBuilding;
  private responseCommittee;
  private responseExamRoom;
  constructor(
    private committeeManagement: CommitteeManagementService,
    private buildingManagement: BuildingManagementService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    private roomManagementService: RoomManagementService
  ) {
    this.myId = activatedRoute.snapshot.params.id;
    this._school_id = window.sessionStorage.getItem('PSN_SCHOOL_ID');
    const preParamCommittee = {
      id: this.myId,
      school_id: this._school_id
    };
    this.committeeManagement.getCommittee(preParamCommittee).then(response => {
      console.log(response);
      this.responseCommittee = response;
    });
    // const _building_id = this.responseBuilding['building_id'];
    // const preParamBuilding = {
    //   id: _building_id,
    //   school_id: this._school_id
    // };
    // this.buildingManagement.getBuilding(preParamBuilding).then(response => {
    //   this.responseBuilding = response;
    // });

    //this.name = this.responseCommittee['committee_prename'] + this.responseCommittee['committee_firstname'];
  }

  ngOnInit() {
  }

}
