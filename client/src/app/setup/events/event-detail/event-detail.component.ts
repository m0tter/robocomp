import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SetupService } from '../../../services/setup-event.service';
import { RoboEvent } from 'robocomp';
import { NavService } from '../../../services';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  private roboEvent: RoboEvent;
  private newRoboEvent: boolean;
  private emptyRoboEvent: RoboEvent = {
      name: '',
      date: '',
      competitions: [],
      isCurrent: true
    }

  constructor(
    private setupService: SetupService,
    private route: ActivatedRoute,
    private location: Location,
    private navService: NavService,
  ){}

  ngOnInit() {
    this.navService.show();
    this.route.params
      .switchMap((params: Params) => {
          if(params['id'] !== '0'){
            this.newRoboEvent = false;
            return this.setupService.getEventById(params['id'])
            } else {
                let roboEvent: RoboEvent = {
                  name: '',
                  date: '',
                  competitions: [],
                  isCurrent: true
            }
            this.newRoboEvent = true;
            return Promise.resolve(roboEvent);
          }
      })
    .subscribe(RoboEvent => this.roboEvent = <RoboEvent>RoboEvent)
    this.setupService.setupNav();
   }

  goBack(){
    this.location.back();
  }

  btnSaveClicked(){
    if(JSON.stringify(this.roboEvent) !== JSON.stringify(this.emptyRoboEvent)){
      if(this.newRoboEvent){
              this.setupService.newEvent(this.roboEvent)
              .then( resp => {this.goBack();})
          } else {
              this.setupService.editEvent(this.roboEvent)
              .then( resp => {this.goBack();})
          }
    } else {
      console.log("The fields are empty, cannot save");
    }
    }

  btnCancelClicked(){
      this.goBack();
  }

}
