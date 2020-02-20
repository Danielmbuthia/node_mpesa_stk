const axios = require('axios');
let {authenticateMpesa} = require('./helpers');
module.exports = async function (_baseUrl) {
    const credentials = await authenticateMpesa();
    const instance = axios.create({
        baseURL:_baseUrl ,
        timeout: 5000,
        headers: {
            'Authorization': 'Bearer ' + credentials.data['access_token'],
            'Content-Type': 'application/json'
        }
    });
    return instance
};