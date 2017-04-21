import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';


@Component({
  selector: 'app-edit-schools',
  templateUrl: './edit-schools.component.html',
  styleUrls: ['./edit-schools.component.scss']
})
export class EditSchoolsComponent implements OnInit {
  

  constructor(
    private route: Router
  ) { }

  ngOnInit():void {
    this.route.params
    .switchmap((params: Params) => {
      if(params['id'] !== '0') {
        this.
      }
    })

  }
  

}

