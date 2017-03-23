import { Model, Schema, Document, model } from 'mongoose';
import { UserBase } from 'robocomp';

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
  }
}

export interface UserDocument extends UserBase, Document { }
export var UserModel = model<UserDocument>('Users', UserSchema);