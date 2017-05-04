import{ UserModel, UserDocument } from '../models/user.model';
import * as mongoose from 'mongoose';
import * as config from '../config/db.config';

mongoose.connect(config.connectionStringLocalDB);
let newUser = new UserModel;
newUser.email = 'admin@roboevent';
newUser.password = 'robo';
newUser.isAdmin = true;
newUser.save((err, result) => {
  if(err)console.error('an error occurred saving the user', err.message || err);
  else {
    console.log('user created:\n', JSON.stringify(result));
    process.exit(0);
  }
});