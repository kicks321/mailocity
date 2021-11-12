
import expressLoader from './express';
import dependency from './dependency';
import Logger from './logger';

export default async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};