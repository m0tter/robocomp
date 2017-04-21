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
  private roboEvents: RoboEvent[];

  constructor( private setupService: SetupService ){ }

  ngOnInit(): void{
    console.log("ngInit");
    this.setupService.getEvents()
      .then(res => this.roboEvents = res )
      .catch(err => this.errorHandler(err));
   }

   errorHandler(err: any) { console.error('something went wrong in SetupEventComponent:' + err); }
}
