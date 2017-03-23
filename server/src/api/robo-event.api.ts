// file:    api/robo-event.api.ts
// author:  sjosephs
// date:    19/03/17

import { Router, Request, Response, NextFunction } from 'express';
import { RoboEvent, Competition } from 'robocomp';
import * as bparser from 'body-parser';
import { RoboEventModel, RoboEventDocument } from '../models/robo-event.model';

export class RoboEventAPI {
  router = Router();

  constructor() {
    this.buildRouter();
  }

  buildRouter() {
    this.router.get('/', (req, res) => {
      RoboEventModel.find((err, events) => {
        if( err ) this.errorHandler( err, res );
        if( events && events.length > 0 ) {
          res.status( 200 ).json( {'success': true, 'data': events} );
        } else {
          res.status( 200 ).json({'success': false, 'message': 'returned events is empty'});
        }
      });
    });

    this.router.delete('/:id', (req, res) => {
      RoboEventModel.findOne( {_id: req.params.id}, (err, evnt) => {
        if( err ) this.errorHandler( err, res );
        if( evnt ) {
          evnt.remove( (rem_err) => {
            if( rem_err ) this.errorHandler( err, res);
            res.status( 200 ).json( {'success': true, 'data': req.params.id} );
          });
        } else {
          res.status( 200 ).json( {'success': false, 'message': 'unable to delete event, check it exists'} );
        }
      });
    });

    this.router.post('/', bparser.json(), (req, res) => {
      var newEvent: RoboEventDocument = new RoboEventModel;
      var data: RoboEvent = req.body;

      if( data ) {
        newEvent.name = data.name;
        newEvent.date = data.date;
        newEvent.isCurrent = data.isCurrent;
        newEvent.competitions = data.competitions;

        newEvent.save((err, result) => {
          if( err ) this.errorHandler( err, res );
          else {
            res.status( 200 ).json( {'success': true, 'data': result} );
          }
        });
      }
    });
  }

  private errorHandler( err: any, res?: Response ) {
    console.error('An error occurred in robo-event.api, ', err.message || err );
    if( res ){
      res.status( 500 ).json( {'success': false, 'message': (err.message || err)} );
    }
  }
}
