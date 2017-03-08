import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

interface SideNavItem { name: string; route:string; }

@Injectable()
export class NavService {
  public navItems: Observable<Array<SideNavItem>>;
  private items: SideNavItem[] = [
    {
      name: 'item1',
      route: 'route1',
    },
    {
      name: 'item2',
      route: 'route2'
    }
  ];

  constructor() { 
    this.navItems = Observable.of(this.items);
    console.log('navitems' + this.navItems);
  }

}