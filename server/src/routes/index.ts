import { Application } from 'express';
import * as path from 'path';

import { SchoolAPI } from '../api/school.api';
import { UserAPI } from '../api/user.api';

export default function registerRoutes(app: Application): void {
  app.use( '/api/schools', SchoolAPI.apiController() );
  app.use( '/api/users', UserAPI.apiController() );
}