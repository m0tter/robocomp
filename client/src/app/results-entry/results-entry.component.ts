import { Component, OnInit } from '@angular/core';

import { NavService } from '../services/nav.service';
import { SideNavItem } from '../../../../common/robocomp';

@Component({
  selector: 'app-results-entry',
  templateUrl: './results-entry.component.html',
  styleUrls: ['./results-entry.component.scss']
})
export class ResultsEntryComponent implements OnInit {

  constructor(private navService: NavService) { }

  initSideNav(): void {
    var items: SideNavItem[] =[
      {
        name: 'Rescue',
        route: '/' 
      },
        { name: '', route: '', isDivider: true},
      {
        name: 'Dance',
        route: '/'
      },
        { name: '', route: '', isDivider: true},
      {
        name: 'Maze',
        route: '/'
      },
        { name: '', route: '', isDivider: true},
      {
        name: 'Sumo',
        route: '/'
      }
    ]
    this.navService.setNavItems(items);
    this.navService.show();
  }

  saveInput(){
    console.log("Save Clicked");
    
  }

  // checkResultType(){
  //   if( )
  // }

  ngOnInit() {
    this.initSideNav();
  }

}
