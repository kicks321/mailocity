import AuthService from '@/services/AuthService';
import { celebrate, Joi } from 'celebrate';
import { Router, Request, Response, NextFunction } from 'express';
import Container from 'typedi';
import { Logger } from 'winston';
const route = Router();


export default (app: Router) => {
  app.use('/auth', route);

  route.post(
    '/signup',
    celebrate({
      body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }),
    async (req: Request, res: Response, next: NextFunction) => {
        console.log("We made it here!!!")
      const logger: Logger = Container.get('logger');
      logger.debug('Calling Sign-Up endpoint with body: %o', req.body );
      try {
        const authServiceInstance = Container.get(AuthService);
        const user = await authServiceInstance.SignUp(req.body);
        return res.status(201).json({ ...user });
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};