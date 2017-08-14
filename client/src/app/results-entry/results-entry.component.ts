import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NavService, RobocompService } from '../services';
import { SideNavItem, RoboEvent } from 'robocomp';
import { ResultsEntryService } from './results-entry.service';

@Component({
  selector: 'app-results-entry',
  templateUrl: './results-entry.component.html',
  styleUrls: ['./results-entry.component.scss']
})
export class ResultsEntryComponent implements OnInit, OnDestroy {
private currentEvent: RoboEvent;
private _subManager = new Subscription();
private _isNavSetup = false;
private _currentEvent: RoboEvent;

  constructor(
    private navService: NavService,
    private resultsentryservice: ResultsEntryService,
    private robocompservice: RobocompService
  ) { }

   ngOnInit() {
     this.setupNav();
  }

  ngOnDestroy() {
    this._subManager.unsubscribe();
  }

  setupNav() {
        this.navService.show();
        this._subManager.add(this.robocompservice.currentEvent.subscribe(res => this.buildNav(res)));
        this._isNavSetup = true;
    }

    buildNav(event:RoboEvent):void{
        console.log('ResultsEntry.Service: event=' + JSON.stringify(event));
        var navItems = new Array();
        this._currentEvent = event;
        event.competitions.forEach(c => {
            navItems.push({name: c.name, route: '.'});
        });
        this.navService.setNavItems(navItems);
    }

  saveInput(): void{
    console.log("Save Clicked");
  }

  getCompType(){
    return(2);
  }

}
