import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavService, AuthenticationService, LoginResult } from '../services';
import { User } from 'robocomp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = { username: '', password: '', email: '', isAdmin: false, canEdit: false };
  loading = false; 
  error = '';

  constructor(
    private navService: NavService,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.navService.hide();
    if(this.authService.loginTimedOut) this.error = "Your login has timed out, please log in again";
    this.authService.loginTimedOut = false;
    // this.authService.logout();
  }

  login() {
    this.loading = true;
    this.authService.login(this.user.username, this.user.password)
      .then( result => {
        if( result === LoginResult.success )
          this.router.navigate( ['/'] );
        else if( result === LoginResult.failed )
          this.error = 'Username or password incorrect';
        else if( result === LoginResult.serverError )
          this.error = "A server error has occurred";
        else 
          this.error = "An unspecified error has occurred";

          this.loading = false;
      }
    );
  }
}
