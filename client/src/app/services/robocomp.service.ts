import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import { RoboEvent }    from '../../../../common/robocomp';
import { API_EVENT }    from '../_api.paths';
import { Observable }   from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class RobocompService {

  constructor( private http: Http ) { }

  getCurrentEvent(): Observable<RoboEvent> {
    return this.http.get(API_EVENT)
      .map((resp) => { return resp.json().data as RoboEvent } );
  }
  
}