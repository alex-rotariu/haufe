import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.currentsapi.services/v1'
});
