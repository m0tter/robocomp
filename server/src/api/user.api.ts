import { Router, Request, Response }  from 'express';
import { User }                       from 'robocomp';
import * as bparser                   from 'body-parser';

import { UserModel, UserDocument } from '../models/user.model';

export class UserAPI {
  router = Router();

  constructor() {
    this.buildRouter();
  }

  buildRouter(): void {
    this.router.post('/', bparser.json(), (req: Request, res: Response) => {
      UserModel.find({})
    })
  }

}

