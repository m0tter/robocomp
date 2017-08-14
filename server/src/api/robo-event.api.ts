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

    this.router.get('/current', (req, res) => {
      RoboEventModel.findOne({isCurrent: true}, (err, event) => {
        if( err ) this.errorHandler( err, res );
        if (event){
          res.status(200).json({'success': true, 'data': event});
        } else {
          res.status(204).json({'success': false, 'data': 'no current event found' });
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

    this.router.put('/:id', bparser.json(), (req, res) => {
      let event = <RoboEvent>req.body;
      
      // set any other event isCurrent to false if the event being saved is the new isCurrent
      if(event.isCurrent) {
        RoboEventModel.find({'isCurrent': true}, (err, docs) => {
          if(err) this.errorHandler(err, res);
          if(docs.length === 1) {
            if(docs[0]._id != event._id) {
              docs[0].isCurrent = false;
              docs[0].save((saveErr, result) => {
                if(saveErr) this.errorHandler(saveErr, res);
              })
            }
          }
        });
      }

      RoboEventModel.findById(req.params.id, (err, docEvent) => {
        if(err) this.errorHandler(err, res);
        else {
          if(event.name) docEvent.name = event.name;
          if(event.date) docEvent.date = event.date;
          if(event.competitions) docEvent.competitions = event.competitions;
          if(event.isCurrent) docEvent.isCurrent = event.isCurrent;

          docEvent.save((saveErr, result) => {
            if(saveErr) this.errorHandler(saveErr, res);
            else res.status(200).json({'success': true, 'data': result});
          });
        }
      });
    });
  }

  private errorHandler( err: any, res?: Response ) {
    console.error('An error occurred in robo-event.api, ', err.message || err );
    if( res ){
      res.status( 500 ).json( {'success': false, 'message': (err.message || err)} );
    }
  }
}
