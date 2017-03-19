import { Application } from 'express';

import { SchoolAPI } from '../api/school.api';
import { AuthAPI } from '../api/auth.api';
import { RoboEventAPI } from '../api/robo-event.api';

export default function registerRoutes(app: Application): void {
  app.use( '/api/schools', SchoolAPI.apiController() );
  app.use( '/api/authenticate', AuthAPI.apiController() );
  app.use( '/api/roboevent', RoboEventAPI.apiController() );
}