import { Router } from 'express';
import users from './routes/users';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	users(app);

	return app
}