//Author: James
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { RoboEvent }                from 'robocomp';
import { Router }                   from '@angular/router';
import { SetupService }             from '../../services/setup-event.service';
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

  constructor(private setupService: SetupService, private router: Router){} 

  ngOnInit(): void{
    //console.log("ngOnInit");
    this.setupService.getEvents()
      .then(res => { this.roboEvents = res as roboEvent[]; console.log('res: ' + JSON.stringify(res)); })
      .catch(err => this.errorHandler(err));
    this.setupService.setupNav();
}

  btnNewClicked(){
    this.router.navigate(['setup/events/detail/0']);
  }

  btnEditClicked(){
    if(this.selectedEvent){
    this.router.navigate(['setup/events/detail/', this.selectedEvent._id])
    }
  }

  btnDeleteClicked(){
    for(let s of this.roboEvents){
            if(s.selected) this.deleteEvents(s, (cb: void) => {this.checkButtons});
        }
  }

  eventSelect_Clicked($index: number){
        this.roboEvents[$index].selected = !this.roboEvents[$index].selected;
        this.checkButtons();
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
      if(roboEvents.length > 0) this.deleteDisabled = false;
  }

  errorHandler(err : any) { console.log("An error has occured in SetupEventComponent:" + err)}

}
