import { Router, Request, Response }  from 'express';
import { User }                       from 'robocomp';
import * as bparser                   from 'body-parser';

import { UserModel, UserDocument } from '../models/user.model';

export class AuthAPI {
  router = Router();

  constructor() {
    this.buildRouter();
  }

  buildRouter(): void {
    this.router.post('/', bparser.json(), (req: Request, res: Response) => {
      // let data:User = req.body;
      console.log('body: ' + JSON.stringify(req.body));
      //console.log('body: ' + data.username);
      // UserModel.findOne({ username: })
      res.status( 200 ).json( {token: 'fake-jwt-token'} );
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
}
