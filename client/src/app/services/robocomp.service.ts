import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import { RoboEvent }    from '../../../../common/robocomp';
import { API_EVENT }    from '../_api.paths';
import { AuthenticationService } from './authentication.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class RobocompService {
  
  private _emptyCurrentEvent: RoboEvent = { name: '', competitions: [], date: '', isCurrent: false};
  private _currentEvent: BehaviorSubject<RoboEvent> = new BehaviorSubject<RoboEvent>(this._emptyCurrentEvent)
  
  public readonly currentEvent: Observable<RoboEvent> = this._currentEvent.asObservable();

  constructor( private http: Http, private authService: AuthenticationService) { 
    this.getCurrentEvent();
  }

  getCurrentEvent(): Promise<RoboEvent> {
    return new Promise((res, rej) => {
      this.http.get(`${API_EVENT}/current`)
        .toPromise()
        .then(event => {
          let json = event.json();
          if (json.success){
            this._currentEvent.next(json.data);
            res(json.data);
          } else {
            rej(json.data);
          }
        })
        .catch(err => this.errorHandler(err));
    }); 
  }

  errorHandler(msg: string){

  }
  
}