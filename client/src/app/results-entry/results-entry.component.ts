import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NavService, RobocompService } from '../services';
import { SideNavItem, RoboEvent, Competition, CompetitionType } from 'robocomp';
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
private _selectedCompetition: Competition;
private _compSelected = false;

  constructor(
    private navService: NavService,
    private __resultsentryservice: ResultsEntryService,
    private robocompservice: RobocompService,
    private __router: Router,
    private __route: ActivatedRoute
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
  }

  buildNav(event:RoboEvent):void{
    console.log('ResultsEntry.Service: event=' + JSON.stringify(event));
    var navItems = new Array();
    this._currentEvent = event;
    event.competitions.forEach(c => {
        navItems.push({name: c.name, route: `/results-entry/${c._id}`});
    });
    this.navService.setNavItems(navItems);

     this.__route.params
      .map(params => {
        if(params['id']){
          this._compSelected = true;
          return event.competitions.find(e => e._id == params['id']);
        } else {
          this._compSelected = false;
        }
      })
      .subscribe(
        res => {
          this._selectedCompetition = res;
          console.log('you selected: ' + JSON.stringify(res));
        },
        err => this.errorHandler(err)
      )
  }

  saveInput(): void{
    console.log("Save Clicked");
  }

  getCompType(){
    return(2);
  }

  private errorHandler(msg:string):void {
    console.error('there is not meant to be water in there ', + msg);
  }

}
