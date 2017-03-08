import { Injectable } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

interface SideNavItem { name: string; route:string; }

@Injectable()
export class NavService {
  public navItems: Observable<Array<SideNavItem>>;
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