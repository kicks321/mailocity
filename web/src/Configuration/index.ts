import env from 'react-dotenv';
import { Configuration } from '../Types';

export default {
    env: env.ENV,
    api: {
        url: env.API_URL,
    },
} as Configuration;
