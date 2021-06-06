const axios = require('axios');
const apiKey = process.env.FIXER_API_KEY;

const axiosService = axios.create({
    baseURL: `http://data.fixer.io/api/latest?access_key=${apiKey}`
});

module.exports = axiosService;