import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { NavService } from '../services/nav.service';

interface SideNavItem { name: string; route:string; }

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  navItems: SideNavItem[];

  constructor( private navService: NavService ) { }

  ngOnInit() {
    this.navService.navItems.subscribe(items => { this.navItems = items });
    // this.navItems = this.navService.navItems;
  }

  errHandler(error: any) { 
    // TODO add errorhandler 
  }
}
