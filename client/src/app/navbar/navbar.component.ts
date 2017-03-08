import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';

interface SideNavItem { name: string; route: string; }

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private navService: NavService ) { }

  btnDashboard_Clicked(): void {
  }

  btnLogin_Clicked(): void {
    
  }

  ngOnInit() {
  }

}
