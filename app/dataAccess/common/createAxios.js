const axios = require('axios');
const config = require('../../../configs/app.config');

module.exports = () => axios.create({
  baseURL: config.baseUrl,
});
