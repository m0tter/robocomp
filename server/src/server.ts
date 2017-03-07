import { Application, Request, Response } from 'express';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';

import registerRoutes from './routes';
import * as dbConfig from './config/db.config';

let app:Application = express();

mongoose.connect( dbConfig.connectionStringLocalDB );
app.use( morgan('dev') );
registerRoutes(app);

app.listen(3000, () => {
  console.log('the magic is on port 3000');
});
