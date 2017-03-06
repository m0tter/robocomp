import { Application } from 'express';
import * as path from 'path';

import { SchoolAPI } from '../api/school.api';

export default function registerRoutes(app: Application): void {
  app.use( '/api/schools', SchoolAPI.apiController() );
}