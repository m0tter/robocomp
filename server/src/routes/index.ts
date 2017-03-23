import { Application } from 'express';

import { SchoolAPI } from '../api/school.api';
import { AuthAPI } from '../api/auth.api';
import { RoboEventAPI } from '../api/robo-event.api';

export default function registerRoutes(app: Application): void {
  app.use( '/api/schools', new SchoolAPI().router );
  app.use( '/api/authenticate', new AuthAPI().router );
  app.use( '/api/roboevent', new RoboEventAPI().router );
}