import { Application } from 'express';
import * as path from 'path';

import { SchoolAPI } from '../api/school.api';
import { AuthAPI } from '../api/auth.api';

export default function registerRoutes(app: Application): void {
  app.use( '/api/schools', SchoolAPI.apiController() );
  app.use( '/api/authenticate', AuthAPI.apiController() );
}