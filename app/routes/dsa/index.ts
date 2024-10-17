import { Router } from 'express';

import answerRoute from './answerRoutes';
import questionRoute from './questionRoutes';

export default function(app: Router) {
    const route = Router();
    app.use('/dsa', route);
    
    answerRoute(route);
    questionRoute(route)

    return route;
}

