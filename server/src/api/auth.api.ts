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
      UserModel.findOne({'email': body.email }, (err, user: UserDocument) => {
        if( err ) this.errorHandler(err);
        if( !user ) {
          this.incorrectUserPassword(res);
        } else {
          user.comparePassword(body.password, (isMatch) => {
            if(!isMatch) this.incorrectUserPassword(res);
            else {
              let token = jwt.sign({ email: user.email, isAdmin: user.isAdmin, canEdit: user.canEdit },
                AUTH_SECRET, { expiresIn: AUTH_EXPIRY });
              res.status(200).json({'success': true, data: token});
            }
          });
        }
      });
    });
  }

  private incorrectUserPassword(res: Response) {
    this.errorHandler('incorrect username or password');
    res.status(200).json({'success': false, 'data': 'Incorrect username or password.'});
  }

  private errorHandler(error: any, response?: Response): void {
    console.error( 'Error in auth.api.ts - ' + (error.message || error) );
    if(response) response.status( 500 ).send('Error in auth.api.ts - ' + (error.message || error));
  }
}
