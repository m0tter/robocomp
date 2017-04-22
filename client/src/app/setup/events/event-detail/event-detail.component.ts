import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SetupService } from '../../../services/setup-event.service';
import { RoboEvent } from 'robocomp';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  private roboEvent: RoboEvent;
  private newRoboEvent: boolean;

  constructor(
    private setupService: SetupService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  goBack(){
    this.location.back();
  }

  btnSaveClicked(){
    if(this.newRoboEvent){
            this.setupService.newEvent(this.roboEvent)
            .then( resp => {this.goBack();})
        } else {
            this.setupService.editEvent(this.roboEvent)
            .then( resp => {this.goBack();})
        }
  }

  btnCancelClicked(){
      this.goBack();
  }

  ngOnInit() {
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
   }

}
