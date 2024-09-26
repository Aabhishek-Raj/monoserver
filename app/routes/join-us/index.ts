import { Router } from 'express';

import usersRoute from './userRoutes';

export default function(app: Router) {
    const route = Router();
    app.use('/joinus', route);
    
    usersRoute(route);

    return route;
}