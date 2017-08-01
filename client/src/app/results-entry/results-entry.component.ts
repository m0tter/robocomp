import { Component, OnInit } from '@angular/core';

import { NavService } from '../services';
import { SideNavItem, RoboEvent } from 'robocomp';

@Component({
  selector: 'app-results-entry',
  templateUrl: './results-entry.component.html',
  styleUrls: ['./results-entry.component.scss']
})
export class ResultsEntryComponent implements OnInit {
private currentEvent: RoboEvent;

  constructor(
    private navService: NavService
    // private RobocompService : RobocompService
  ) { }

   ngOnInit() {
    this.initSideNav();

    // this.RobocompService.getCurrentEvent().subscribe((result) => this.currentEvent = result);
    
  }

  initSideNav(): void {
    var items: SideNavItem[] =[
      {
        name: 'Rescue',
        route: '/' 
      },
        //{ name: '', route: '', isDivider: true},
      {
        name: 'Dance',
        route: '/'
      },
        //{ name: '', route: '', isDivider: true},
      {
        name: 'Maze',
        route: '/'
      },
        //{ name: '', route: '', isDivider: true},
      {
        name: 'Sumo',
        route: '/'
      }
    ]
    this.navService.setNavItems(items);
    this.navService.show();
  }

  saveInput(): void{
    console.log("Save Clicked");
  }

  getCompType(){
    return(2);
  }

}
