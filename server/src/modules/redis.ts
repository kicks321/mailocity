import * as redis from 'redis';

// In heroku may need to add a url variable
export default async () => {
  const redisClient = redis.createClient();

  await redisClient.connect();

  redisClient.on('error', error => {
    console.log('Redis not connected', error);
  });
  return redisClient;
};
