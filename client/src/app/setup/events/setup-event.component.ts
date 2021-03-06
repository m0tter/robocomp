//Author: James
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { RoboEvent }                from 'robocomp';
import { Router }                   from '@angular/router';
import { SetupEventService }             from './setup-event.service';
import 'rxjs/add/operator/switchMap';

interface roboEvent extends RoboEvent {
    selected: boolean;
}

@Component({
  selector: 'setup-event',
  templateUrl: 'setup-event.component.html',
  styleUrls: ['setup-event.component.scss']
})

export class SetupEventComponent implements OnInit {
  private roboEvents: roboEvent[];
  private selectedEvent: RoboEvent;
  //private roboEvent: RoboEvent;
  private newRoboEvent: boolean;

  private editDisabled: boolean = true;
  private deleteDisabled: boolean = true;

  constructor(private setupService: SetupEventService, private router: Router){} 

  ngOnInit(): void{
    //console.log("ngOnInit");
    this.setupService.getEvents()
      .then(res => this.roboEvents = res as roboEvent[])
      .catch(err => this.errorHandler(err));
}

  btnNewClicked(){
    this.router.navigate(['setup/events/detail/0']);
  }

  btnEditClicked(){
    this.checkButtons();
    if(this.editDisabled == false){
      if(this.selectedEvent){
        this.router.navigate(['setup/events/detail/', this.selectedEvent._id])
      }
    } else {
      console.log("[IN setup-events.component.ts] Will not edit as editDisabled is true");
    }
  }

  btnDeleteClicked(){
    this.checkButtons();
    if(this.deleteDisabled == false){
      for(let s of this.roboEvents){
          if(s.selected) this.deleteEvents(s, (cb: void) => {this.checkButtons});
      }
    } else {
      console.log("[IN setup-events.component.ts] Will not delete as deleteDisabled is true");
    }
  }

  eventSelect_Clicked($index: number){
        this.roboEvents[$index].selected = !this.roboEvents[$index].selected;
        this.checkButtons();  
    }
  
  eventCurrent_Clicked($index: number){
    for(let x = 0; x < this.roboEvents.length; x++){
      if (x == $index) this.roboEvents[$index].isCurrent = true;
      else this.roboEvents[x].isCurrent = false;
    }
    this.setupService.changeIsCurrent($index);
  }

  deleteEvents(roboEvent: roboEvent, cb?: Function): void{
        console.log('deleteSchool' + JSON.stringify(roboEvent));
          this.setupService.deleteEvent(roboEvent)
            .then(res => {if(res)this.roboEvents.splice( this.roboEvents.indexOf(roboEvent), 1); if(cb) cb();})
            .catch(err => this.errorHandler(err));
    }

  checkButtons(){
    this.editDisabled = true;
    this.deleteDisabled = true;

    let roboEvents = this.roboEvents.filter(event => event.selected === true)

    if(roboEvents.length === 1){
      this.editDisabled = false; 
      this.selectedEvent = roboEvents[0];
    }
      if(roboEvents.length > 0){
        this.deleteDisabled = false;
      }
  }

  errorHandler(err : any) { console.log("An error has occured in SetupEventComponent:" + err)}
}
