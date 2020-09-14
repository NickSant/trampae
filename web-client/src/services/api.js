import axios from 'axios';
require('dotenv').config();

const host = process.env.REACT_APP_HOST_API;
const port = process.env.REACT_APP_PORT_API;

const api =  axios.create({
    baseURL:`http://localhost:3333`,
});

export default api;