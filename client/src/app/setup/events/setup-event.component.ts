//Author: James
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { RoboEvent }                from 'robocomp';
import { SetupService }             from '../../services/setup.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'setup-event',
  templateUrl: 'setup-event.component.html',
  styleUrls: ['setup-event.component.scss']
})

export class SetupEventComponent implements OnInit {
  private roboEvent: RoboEvent;
  private newRoboEvent: boolean;

  constructor(
    private setupService: SetupService,
    private route: ActivatedRoute,
    private location: Location 
    ){}

  ngOnInit(): void{
    console.log("ngInit");
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
