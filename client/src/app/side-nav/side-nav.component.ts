import { Component, OnInit } from '@angular/core';

import { NavService } from '../services';
import { SideNavItem } from '../../../../common/robocomp';


@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  navItems: SideNavItem[];
  public visible = false;

  constructor( private navService: NavService ) { }

  ngOnInit() {
    this.navService.sideNav = this;
  }

  errHandler(error: any) { 
    // TODO add errorhandler 
  }
}
