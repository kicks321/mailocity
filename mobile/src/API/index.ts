import axios from 'axios';
import Configuration from '../Configuration';

//REMINDER: Replace the baseURL at a later point when this is deployed. Currently we can have it localhost
export default axios.create({
    baseURL: Configuration.env === 'DEV' ? `http://${Configuration.api.url}:5000/api/v1` : '',
});
