import expressLoader from './express';
import dependency from './dependency';
import Logger from './logger';
import { createConnection } from 'typeorm';

export default async ({ expressApp }) => {
  createConnection();

  await expressLoader({ app: expressApp });

  await dependency();

  Logger.info('✌️ Express loaded');
};
