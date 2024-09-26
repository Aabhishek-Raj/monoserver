import { Router } from 'express';

export default function (app: Router) {
	const route = Router();
	app.use('/users', route);

	route.get('/', async (req, res, next) => {
		try {
			const results = {
        hai: 'result',
        hello: 'hai'
      };
			res.json(results);
		} catch (error) {
			next(error);
		}
	});
}