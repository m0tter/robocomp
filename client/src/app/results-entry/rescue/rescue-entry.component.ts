import { Component, OnInit } from '@angular/core';

import { NavService } from '../../services';
import { SideNavItem, RoboEvent } from 'robocomp';

@Component({
    selector: 'app-results-entry',
    templateUrl: './rescue-entry.component.html',
    styleUrls: ['./rescue-entry.component.scss']
})
export class RescueEntryComponent implements OnInit {
    private currentEvent: RoboEvent;

    constructor(
        private navService: NavService
    ) { }

    ngOnInit() {
        this.initSideNav();
    }

    initSideNav(): void {
        var items: SideNavItem[]=[
            {
                name: 'Back',
                route: '/results-entry'
            }
        ]
        this.navService.setNavItems(items);
        this.navService.show();
    }

}