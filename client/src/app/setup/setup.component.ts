import { Component, OnInit } from '@angular/core';

import { NavService } from '../services';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(private navService: NavService) { }

  buildSideNav(): void {
    this.navService.show();
    this.navService.setNavItems([
      {
        name: 'Events',
        route: 'setup/events'
      },
      {
        name: 'Schools',
        route: 'setup/schools'
      }
    ]);
  }

  ngOnInit() {
    this.buildSideNav();
  }
}
