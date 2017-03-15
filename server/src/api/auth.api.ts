import { Router, Request, Response }  from 'express';
import { User }                       from 'robocomp';
import { AUTH_SECRET, AUTH_EXPIRY }   from '../config/auth.config';
import * as bparser                   from 'body-parser';
import * as jwt                       from 'jsonwebtoken';

import { UserModel, UserDocument } from '../models/user.model';

export class AuthAPI {
  router = Router();

  constructor() {
    this.buildRouter();
  }

  buildRouter(): void {
    
    this.router.post('/', bparser.json(), (req: Request, res: Response) => {
      var body = <User>req.body;
      UserModel.findOne({'username': body.username, 'password': body.password }, (err, user: UserDocument) => {
        if( err ) this.errorHandler(err);
        if( !user ) {
          res.status( 200 ).json( {success: 'false', message: 'Incorrect username or password.' } );
        } else {
          var token = jwt.sign({ username: user.username, isAdmin: user.isAdmin }
            , AUTH_SECRET, { expiresIn: AUTH_EXPIRY });
          res.status( 200 ).json( {success: 'true', data: token} );
        }
      });
    });

    this.router.get('/setup', (req: Request, res: Response) => {
      var newUser: UserDocument = new UserModel();
      newUser.isAdmin = true;
      newUser.username = 'admin';
      newUser.password = 'robocomp!';

      newUser.save((err, user) => {
        if( err ) res.status( 500 ).json( {success: 'false', data: err} );
        res.status( 200 ).json( {success: 'true', data: user} );
      });
    });
  }

  static apiController(): Router {
    let userAPI = new AuthAPI();
    return userAPI.router;
  }

  private errorHandler(error: any, response?: Response): void {
    console.error( 'Error in auth.api.ts - ' + (error.message || error) );
    response.status( 500 ).send('Error in auth.api.ts - ' + (error.message || error));
  }
}
