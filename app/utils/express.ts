import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import config from '../config';
import indexRouter from '../routes';
import { notFoundHandler, globalErrorHandler } from '../routes/middleware/error';
import type { Express, Request, Response } from 'express';

export default async function ({ app }: { app: Express }) {

	app.get('/status', (req, res) => res.sendStatus(200).end());
	app.head('/status', (req, res) => res.sendStatus(200).end());

	// reveal real origin ip behind reverse proxies
	app.enable('trust proxy'); 

	app.use(
		helmet({
			contentSecurityPolicy: false
		})
	);
	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(morgan(config.logs.morgan));

	// routes
	app.use(config.app.apiPrefix, indexRouter());

	app.use(notFoundHandler);
	app.use(globalErrorHandler);

  app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', uptime: process.uptime() });
  });
}