import { Component, OnInit } from '@angular/core';

import { SetupService } from '../services';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(private setupService: SetupService) {
    this.setupService.setupNav();
   }

  buildSideNav(): void {
   
  }

  ngOnInit() {
    this.buildSideNav();
  }
}
