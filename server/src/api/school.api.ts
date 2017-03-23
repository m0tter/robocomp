import { Router, Request, Response, NextFunction }  from 'express';
import { School }                     from 'robocomp';
import * as bparser                   from 'body-parser';
import * as jwt                       from 'jsonwebtoken';
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

    this.router.use(bparser.json(), (req, res, next) => {
      var token;
      if( req && req.headers['x-access-token']) token = req.headers['x-access-token'];
      if( token ) {
        jwt.verify( token, AUTH_SECRET, ( err: any, decoded: jwt.VerifyCallback ) => {
          if( err ) res.status( 401 ).json({ 'success': 'false', 'message': '401 - NOT AUTHORISED' });
          else {
            next();
          }
        });
      } else { res.status( 401 ).send('401 - NOT AUTHORISED') };
    });

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
  }

  private errorHandler( err: any, res?: Response ){
    console.error('An error occurred in school.api', err.message || err);
    if( res )
      res.status( 500 ).json( {'success': false, 'data': err.message} );
  }
}
