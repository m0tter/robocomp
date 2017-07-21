import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private router: Router ) { }

  canActivate() {
    if( localStorage.getItem( 'roboUser' )) {
      console.log('authguard:returning true');
      return true;
    }
    console.log('authguard:returning false');
    this.router.navigate(['/login']);
    return false;
  }
}