import { Container } from 'typedi';
import LoggerInstance from './logger';
import redisClient from './redis';

export default async () => {
  try {
    Container.set('logger', LoggerInstance);
    LoggerInstance.info('✅ Logger injected into container');

    const client = await redisClient();
    LoggerInstance.info(`${client.isOpen ? '✅' : '🛑'} Redis client status: %o`, client.isOpen ? 'OPEN' : 'CLOSED');

    Container.set('redis', client);
    LoggerInstance.info('✅ Redis injected into container');
  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};
