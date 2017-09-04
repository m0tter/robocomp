import { Component, OnInit, OnDestroy } from '@angular/core';
import { RobocompService } from '../../services/robocomp.service';
import { Subscription } from 'rxjs';
import { Competition, RoboEvent } from 'robocomp';

@Component({
  selector: 'app-draws',
  templateUrl: './draws.component.html',  
  styleUrls: ['./draws.component.scss']
})
export class DrawsComponent implements OnInit, OnDestroy {
  private subsManger = new Subscription();
  private currentEventComps: Competition[];

  selectedValue: string;

  // currentComps = [
  //   {id: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];


  constructor(private robocompService: RobocompService) { }

  ngOnInit(){
    this.getCurrentEventComps();
  }

  ngOnDestroy(){
    this.subsManger.unsubscribe();
  }

  getCurrentEventComps(): void{
    
    this.subsManger.add(this.robocompService.currentEvent.subscribe(res => {
      this.currentEventComps = res.competitions;
      //console.log(JSON.stringify(res.competitions));
      console.log("Current Event Competitions: " + JSON.stringify(this.currentEventComps));
    }));
  }
}