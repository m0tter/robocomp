import { Component, OnInit } from '@angular/core';

import { SetupService } from './setup.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(private setupService: SetupService) {
    this.setupService.setupNav();
   }



  ngOnInit() {
    
  }
}
