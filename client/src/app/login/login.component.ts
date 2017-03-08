import { Component, OnInit } from '@angular/core';

import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.setNavItems([{name: 'login1', route: 'route1'}, {name: 'login2', route: 'route2'}]);
    this.navService.show();
  }

}
