import { Router, Request, Response, NextFunction }  from 'express';
import { School }                     from 'robocomp';
import * as bparser                   from 'body-parser';
import * as jwt                       from 'jsonwebtoken';
import * as utils                     from '../utils';
import { AUTH_SECRET }                from '../config/auth.config';

import { SchoolModel, SchoolDocument } from '../models/school.model';

export class SchoolAPI {
  public router = Router();

  constructor( ){
    this.buildRouter();
  }

  buildRouter() {
    
    this.router.get('/', ( req: Request, res: Response ) => {
      SchoolModel.find({'isCurrent': true}, (err: any, schools: School[]) => {
        if(err) this.errorHandler(err, res);
        else {
          if(schools) {
            res.status( 200 ).json({'success': true, data: schools});
          } else {
            res.status( 200 ).json({'success': true, data: null});
          }
        }
      });
    });

   // this.router.use((req, res, next) => {
   //   utils.tokenCheck(req, res, next);
   // });

    this.router.post('/', bparser.json(), (req: Request, res: Response) => {
      var newSchool: SchoolDocument = new SchoolModel;
      var data:School = req.body;
        if( data ) {
        if( data.name )           newSchool.name          = data.name;
        if( data.contactEmail )   newSchool.contactEmail  = data.contactEmail;
        if( data.contactName )    newSchool.contactName   = data.contactName;
        if( data.contactNumber )  newSchool.contactNumber = data.contactNumber;
        if( data.isCurrent )      newSchool.isCurrent     = data.isCurrent;
        if( data.address )        newSchool.address       = data.address;
        if(data.teams)            newSchool.teams         = data.teams;
        newSchool.save((err, result) => {
          if( err ) this.errorHandler( err, res );
          else {
            res.status( 200 ).json({'success': true, data: result});
          }
        });
      }
    });

    this.router.delete('/:id', (req: Request, res: Response) => {
      SchoolModel.remove( {_id: req.params.id}, err => {
        if( err ) this.errorHandler( err, res );
        else res.status( 200 ).json( {'success': true, 'data': req.params.id} );
      });
    });

 this.router.put('/:id', bparser.json(), (req, res) => {
      SchoolModel.findById(req.params.id, (err, schl) => {
        if(err) this.errorHandler(err, res);
        else {
          let data = req.body as School;
          if(data.name) schl.name = data.name;
          if(data.contactEmail) schl.contactEmail = data.contactEmail;
          if(data.contactName) schl.contactName = data.contactName;
          if(data.contactNumber) schl.contactNumber = data.contactNumber;
          if(data.isCurrent) schl.isCurrent = data.isCurrent;
          if(data.address) schl.address = data.address;
          if(data.teams) schl.teams = data.teams;

          schl.save((saveErr, result) => {
            if(saveErr) this.errorHandler(saveErr, res);
            else res.status(200).json({'success':true, 'data': result});
          });
        }
      });
    });
  }

  private errorHandler( err: any, res?: Response ){
    console.error('An error occurred in school.api', err.message || err);
    if( res )
      res.status( 500 ).json( {'success': false, 'data': err.message} );
  }
}
