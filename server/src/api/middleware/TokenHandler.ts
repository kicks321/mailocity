import { getRepository } from 'typeorm';
import redisClient from '@/modules/redis';
import { APIError, ErrorStatus } from '@/types';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '@/database/entity/user.entity';
import { IUser } from '@/interfaces/IUser';

const TokenHandler = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const error: APIError = {
    status: undefined,
    message: '',
    source: req.originalUrl,
    errors: [],
  };

  if (!req.headers.authorization) {
    return next();
  }

  const token = req.headers.authorization.split(' ')[1] || req.params.token;

  // Check if the token exists
  if (!token) {
    return res.status(401).send({ ...error, status: ErrorStatus.ACCESS_DENIED, message: 'User needs to sign in' });
  }

  try {
    const result = await (await redisClient()).lRange('token', 0, 99999999);
    if (result.indexOf(token) > -1) {
      return res.status(ErrorStatus.BAD_REQUEST).json({
        ...error,
        status: ErrorStatus.BAD_REQUEST,
        message: 'Invalid token provided',
      });
    }
    const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
    const userRepo = getRepository(User);
    console.log('Getting user id: ', decrypt.id);
    const userRecord: IUser[] = await userRepo.find({ where: { id: decrypt.id } });

    if (userRecord.length <= 0 || !userRecord) {
      return res.status(ErrorStatus.ACCESS_DENIED).json({
        ...error,
        status: ErrorStatus.ACCESS_DENIED,
        message: 'Invalid token provided',
      });
    }

    next();
  } catch (err: any) {
    return res.status(ErrorStatus.INTERNAL_SERVER_ERROR).json({
      ...error,
      status: ErrorStatus.INTERNAL_SERVER_ERROR,
      message: err.message || error.toString(),
    });
  }
};

export default TokenHandler;
