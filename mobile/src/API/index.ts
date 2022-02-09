import Configuration from '@Configuration';
import axios from 'axios';

//REMINDER: Replace the baseURL at a later point when this is deployed. Currently we can have it localhost
export default axios.create({
    baseURL: Configuration.env === 'DEV' ? `http://${Configuration.api.url}/api` : '',
});
