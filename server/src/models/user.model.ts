import { Model, Schema, Document, model } from 'mongoose';
import { UserBase } from 'robocomp';
import * as Utils from '../utils/utils';

let UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: String,
  isAdmin: Boolean
});

UserSchema.statics = {
  saveUser: (requestData: any, callback: Function) => {
    this.create(requestData, callback);
  },

  updateUser: (user: UserDocument, callback: Function) => {
    user.update(callback);
  },

  decryptPassword: (password: string, callback: Function): string =>{
    let decrypted = Utils.decrypt(password);
    if(callback) callback(decrypted);
    return decrypted;
  },

  encryptPassword: (password: string, callback: Function): string => {
    let encrypted = Utils.encrypt(password);
    if(callback) callback(encrypted);
    return encrypted;
  }
}

export interface UserDocument extends UserBase, Document { }
export var UserModel = model<UserDocument>('Users', UserSchema);