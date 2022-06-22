const axios = require('axios');

const API_URL = 'https://fakestoreapi.com'

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

module.exports = axiosInstance;
