'use strict';

const axios = require('axios');
const crypto = require('crypto');
const {  errorResponse, CustomError } = require('../helpers/errorHelper');

const checkSumGenerator = (url) => {
    return new Promise((resolve, reject) => {
      const hash = crypto.createHash('md5');
      axios({
        method: 'get',
        url,
        responseType: 'stream'
      })
        .then((response) => {
          response.data.pipe(hash)
          .on('error', () => {
            reject('Unable to hash MP3 file')
          })
          .on('data', (chunk) => {
            hash.update(chunk);
          })
          .on('finish', () => {
            resolve(hash.digest('hex'));
          })
        });
  
    }).catch(error => {
      const customError = new CustomError({
        message: 'Failed to calculate checksum',
        status: error.status,
        meta: {
          error
        }
      });
      return errorResponse(customError);
    });
 
}
module.exports = {
    checkSumGenerator
}