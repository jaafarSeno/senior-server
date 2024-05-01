import { Redis } from 'ioredis';
require('dotenv').config();

const redisClient = () => {
    if (process.env.REDIS_URL) {
        console.log(`Redis connected`);
        return {
            host: 'still-lamb-42569.upstash.io',
            port: 42569,
            maxRetriesPerRequest: null  // This will disable retry limit
        };
    }
    throw new Error('Redis connection failed');
};

export const redis = new Redis(redisClient());
