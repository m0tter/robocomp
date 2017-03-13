import { Component, OnInit } from '@angular/core';

import { NavService } from '../services/nav.service';
import { SideNavItem } from '../../../../common/robocomp';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private navService: NavService) { }

  initSideNav(): void {
    var items: SideNavItem[] = [
      {
        name: 'Results',
        route: '/'
      },
      {
        name: '',
        route: '',
        isDivider: true
      },
      {
        name: 'Teams',
        route: '/'
      },
      {
        name: '',
        route: '',
        isDivider: true
      },
      {
        name: 'School Results',
        route: '/'
      }
    ]
    this.navService.setNavItems(items);
    this.navService.show();
  }

  ngOnInit() {
    this.initSideNav();
  }

}
