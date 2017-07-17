// file:    api/user.api.ts
// author:  sjosephs
// date:    24/03/17

import { Router }                   from 'express';
import * as bparser                 from 'body-parser';
import { User }                     from 'robocomp';
import { UserDocument, UserModel }  from '../models/user.model';
import { AUTH_SECRET }              from '../config/auth.config';
import * as utils                   from '../utils';

export class UsersAPI {
  public router = Router();

  constructor() {
    this.buildRouter();
  }

  buildRouter() {
    this.router.use((req, res, next) => {
      utils.tokenCheck(req, res, next);
    });
    
    this.router.get('/', (req, res) => {
      UserModel.find().populate('-password').exec((err, users) => {
        if(err) this.errorHandler(err, res);
        else {
          res.status(200).json({'success': true, data: users});
        }
      });
    });

    this.router.get('/:id', (req, res) => {
      if(!req.params.id) this.errorHandler('no user id supplied', res);
      else {
        UserModel.findOne(req.params.id, (err, user) => {
          if(err) this.errorHandler(err, res);
          else {
            res.status(200).json({'success': true, data: user});
          }
        });
      }
    });

    this.router.post('/', bparser.json(), (req, res) => {
      if(req.body) {
        let newUser = new UserModel;
        let user = <User>req.body;
        if(user.email && user.password){
          newUser.email = user.email;
          newUser.password = user.password;
          newUser.isAdmin = user.isAdmin && true;
          newUser.canEdit = user.canEdit && true;

          newUser.save((err, result) => {
            if(err) this.errorHandler(err, res);
            else {
              res.status(200).json({'success': true, 'data': result});
            }
          });
        }
        else this.errorHandler('missing required fields', res);
      }
    });

    this.router.put('/:id', bparser.json(), (req, res) => {
      let data = <User>req.body;
      if(req.params.id && data) {
        UserModel.findById(req.params.id, (err, user) => {
          if(err) this.errorHandler(err, res);
          else {
            if(user) {
              if(data.email) user.email = data.email;
              if(data.password) user.password = data.password;
              user.isAdmin = data.isAdmin && true;
              user.canEdit = data.canEdit && true;

              user.save((err, result) => {
                if(err) this.errorHandler(err, res);
                else res.status(200).json({'success': true, 'data': result});
              });
            } else this.errorHandler('no user record matches the supplied data.', res); 
          }
        });
      }
    });

    this.router.delete('/:id', (req, res) => {
      if(req.params.id) {
        UserModel.findByIdAndRemove(req.params.id, err => {
          if(err) this.errorHandler(err, res); else res.status(200).json({'success': true});
        });
      }
    });
  }

  private errorHandler(error: any, resp: any) {
    console.error('an error occurred in user.api: ', error.message || error);
    resp.status(200).json({'success': false, data: error});
  }
}

