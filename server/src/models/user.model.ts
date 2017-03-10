import { Model, Schema, Document, model } from 'mongoose';
import { UserBase } from 'robocomp';

let UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  isAdmin: Boolean
});

export interface UserDocument extends UserBase, Document { }
export var UserModel = model<UserDocument>('Users', UserSchema);