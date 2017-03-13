import { Component, OnInit } from '@angular/core';

import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.setNavItems([{name: 'Warren waz here', route:'.'}])
    this.navService.show();
  }

}
