import { Model, Schema, Document, model } from 'mongoose';
import { UserBase } from 'robocomp';
import * as Utils from '../utils/utils';
import { SALT_WORK_FACTOR } from '../config/auth.config';
import * as bcrypt from 'bcrypt-nodejs';

let UserSchema = new Schema({
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  isAdmin: Boolean,
  canEdit: Boolean
});

UserSchema.pre('save', function(next) {
  let user = this;
  if(!this.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function() {}, function(err, hash) {
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (passwordToCheck:string, cb:Function) {
  bcrypt.compare(passwordToCheck, this.password, (err, isMatch) => {
    if(err) return cb(err);
    cb(isMatch);
  });
}

interface ComparePasswordCallback { (isMatch: boolean):void }
export interface UserDocument extends UserBase, Document { comparePassword(password: string, callback: ComparePasswordCallback): void }
export var UserModel = model<UserDocument>('Users', UserSchema);
