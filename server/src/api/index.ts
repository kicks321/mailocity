import { Router } from 'express';
import auth from './routes/auth';
import users from './routes/users';

export default () => {
    const app = Router();
    users(app);
    auth(app);

    return app;
};
