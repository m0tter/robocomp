import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../services';
import { RobocompService } from '../services/robocomp.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private currentEventName: String;
  private subsManager = new Subscription();
  
  constructor( private authService: AuthenticationService, private robocompService: RobocompService ) { }

  isLoggedIn(): boolean {
    return this.authService.token && true;
  }

  ngOnInit() {
    this.getCurrentEventName(); 
  }

  ngOnDestroy(){
    this.subsManager.unsubscribe();
  }

  getCurrentEventName(): void{
    this.subsManager.add(this.robocompService.currentEvent.subscribe(res => this.currentEventName = res.name));
  }

  errorHandler(msg: string) {
    console.log("Error in navbar.component.ts:" + msg);
  }
}
