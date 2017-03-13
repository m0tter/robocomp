import { Application, Request, Response } from 'express';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

import registerRoutes from './routes';
import * as dbConfig from './config/db.config';

let app:Application = express();

mongoose.connect( dbConfig.connectionStringLocalDB );
app.use( morgan('dev') );

//app.use(function (req, res, next) {
//  console.log('origin: ' + req.header('origin'));
//    res.setHeader('Access-Control-Allow-Headers', 'accept, authorization, content-type, x-requested-with');
//    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//    res.setHeader('Access-Control-Allow-Origin', req.header('origin'));
//    next();
//});
app.use(cors());
app.options('*', cors());

registerRoutes(app);

app.listen(3000, () => {
  console.log('the magic is on port 3000');
});
