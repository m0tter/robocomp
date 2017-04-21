//Author: James
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { RoboEvent }                from 'robocomp';
import { Router }                   from '@angular/router';
import { SetupService }             from '../../services/setup-event.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'setup-event',
  templateUrl: 'setup-event.component.html',
  styleUrls: ['setup-event.component.scss']
})

export class SetupEventComponent implements OnInit {
  private roboEvents: RoboEvent[];
  //private roboEvent: RoboEvent;
  private newRoboEvent: boolean;

  constructor(private setupService: SetupService, private router: Router){} 

  ngOnInit(): void{
    console.log("ngOnInit");
    this.setupService.getEvents()
      .then(res => this.roboEvents = res)
      .catch(err => this.errorHandler(err));
}

  btnNewClicked(){
    this.router.navigate(['setup/events/detail/0']);
  }

  btnEditClicked(){

  }

  btnDeleteClicked(){

  }

  errorHandler(err : any) { console.log("An error has occured in SetupEventComponent:" + err)}

}
