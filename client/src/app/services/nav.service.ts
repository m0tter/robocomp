import { Injectable } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { SideNavItem } from '../../../../common/robocomp';

@Injectable()
export class NavService {
  public sideNav: SideNavComponent;

  constructor() { 
    this.setNavItems([]);
   }

  hide(): void {
    if(this.sideNav) this.sideNav.visible = false;
  }

  show(): void {
    if(this.sideNav) this.sideNav.visible = true;
  }

  setNavItems(items: SideNavItem[]) {
    //this.navItems = Observable.of(items);
    if(this.sideNav) this.sideNav.navItems = items;
  }

}