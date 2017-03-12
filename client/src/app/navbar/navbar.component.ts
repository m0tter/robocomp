import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor( private authService: AuthenticationService ) { }

  isLoggedIn(): boolean {
    if( this.authService.token ) return true; else return false;
  }

  ngOnInit() { 

  }
}
