import { Router } from 'express';

import dsaRouter from './dsa'

export default function () {
    const app = Router();

    dsaRouter(app);

    return app;
}