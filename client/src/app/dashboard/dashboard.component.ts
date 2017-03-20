import { Component, OnInit } from '@angular/core';

import { NavService, RobocompService } from '../services';
import { SideNavItem, RoboEvent } from '../../../../common/robocomp';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private currentEvent: RoboEvent;

  private ResultType = "int";

  constructor (
    private navService: NavService,
    private roboService: RobocompService 
  ) { }

  myButton(): void {
    if(this.ResultType === "int") this.ResultType = "time"; else this.ResultType = "int";
  }

  initSideNav(): void {
    this.navService.hide();
  }

  ngOnInit() {
    this.initSideNav();

    this.roboService.getCurrentEvent()
      .subscribe((result) => this.currentEvent = result );
  }

}
