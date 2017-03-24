// file:    api/user.api.ts
// author:  sjosephs
// date:    24/03/17

import { Router }                   from 'express';
import * as bparser                 from 'body-parser';
import * as jwt                     from 'jsonwebtoken';
import { UserDocument, UserModel }  from '../models/user.model';
import { AUTH_SECRET }              from '../config/auth.config';

export class UserAPI {
  public router = Router();

  constructor() {
    this.buildRouter();
  }

  buildRouter() {
    this.router.use(bparser.json(), (req, res, next) => {
      var token;
      if( req && req.headers['x-access-token'] )
        token = req.headers['x-access-token'];
      if( token ) {
        jwt.verify( token, AUTH_SECRET, (err: any, decoded: jwt.VerifyCallback ) => {
          if( err ) res.status( 401 ).json({ 'success': 'false', 'message': '401 - NOT AUTHORISED' });
          else { next(); }
        });
      } else { res.status( 401 ).send('401 - NOT AUTHORISED')};
    });
    
    this.router.get('/', (req, res) => {
      UserModel.find
    })
  }
}

