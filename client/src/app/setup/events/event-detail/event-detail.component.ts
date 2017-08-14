import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import 'rxjs/add/operator/switchMap'; 
import 'rxjs/add/operator/do';

import { RoboEvent, Competition } from 'robocomp';
import { COMPTYPES } from '../../../comp-types';
import { SetupEventService } from '../setup-event.service';
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
  
  private comp: Competition = {
    name: '',
    type: 0
  };
  private emptyComp: Competition = {
    name: '',
    type: 0
  };
  private compTypeNames: string[];
  private compTypeHack = COMPTYPES;

  private eventCopy: RoboEvent ={
      name: '',
      date: '',
      competitions: [],
      isCurrent: true
    };

  //This is a hack, could cause promblems if extra score types are ever added. Fix later.
  private compTypeEnumKey: string[] = ["Sumo", "Rescue", "Dance"];

  constructor(
    private setupService: SetupEventService,
    private route: ActivatedRoute,
    private location: Location,
    private navService: NavService  
  ){ 
    //Object.keys(this.compTypeHack).forEach(key => console.log('key: ', key)); 
  }

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
                  isCurrent: false
            }
            this.newRoboEvent = true;
            return Promise.resolve(roboEvent);
          }
      })
    .subscribe(RoboEvent => {this.roboEvent = <RoboEvent>RoboEvent; this.copyRoboEvent(RoboEvent);});
   }

  copyRoboEvent(dbEvent: RoboEvent):void{
    //if(dbEvent.name) this.eventCopy.name = dbEvent.name;
    //if(dbEvent.date) this.eventCopy.date = dbEvent.date;
    //if(dbEvent.competitions) this.eventCopy.competitions = dbEvent.competitions;
    //this.eventCopy.isCurrent = dbEvent.isCurrent;
    //if(dbEvent._id) this.eventCopy._id = dbEvent._id;
    this.eventCopy = <RoboEvent>JSON.parse(JSON.stringify(dbEvent));
    console.log(JSON.stringify(this.eventCopy));
  }

  goBack(){
    this.location.back();
  }

  btnPlusClicked(){
    if(JSON.stringify(this.comp) !== JSON.stringify(this.emptyComp)){
      this.eventCopy.competitions.push({name: this.comp.name, type: this.comp.type});
    }
  }

  btnMinusClicked($index: number){
    this.eventCopy.competitions.splice($index, 1);
  }

  btnSaveClicked(){
    console.log(this.eventCopy);
    if(JSON.stringify(this.eventCopy) !== JSON.stringify(this.emptyRoboEvent)){
      if(this.newRoboEvent){
              this.setupService.newEvent(this.eventCopy)
              .then( resp => {this.goBack();})
          } else {
              this.setupService.editEvent(this.eventCopy)
              .then( resp => {this.goBack();})
          }
    } else {
      console.log("The fields are empty, cannot save");
    }
    }

  btnCancelClicked(){
      this.goBack();
  }

  changeCurrentEvent(){
    this.eventCopy.isCurrent = !this.eventCopy.isCurrent;
    console.log("this.eventCopy.isCurrent: " + this.eventCopy.isCurrent);
  }

  //this is dodgy
  changeCompTypeEnumToString(num:number):string{
    return(this.compTypeEnumKey[num]);
  }
}
