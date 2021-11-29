import 'reflect-metadata';
import config from './config';
import express from 'express';
import Logger from './modules/logger';

async function startServer() {
  const app = express();
  await require('./modules').default({ expressApp: app });

  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();
