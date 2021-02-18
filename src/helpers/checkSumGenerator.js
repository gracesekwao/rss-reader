'use strict';

const _ = require('lodash');
const axios = require('axios');

const { errorResponse, CustomError } = require('../helpers/errorHelper');

const checkSumGenerator = async (url) => {
  console.log(url)
  try {
    axios({
      method: 'head',
      url,
    })
      .then(function (response) {
        const headers = response.headers;
        const checksum = _.get(headers, 'content-md5', '');
        return checksum
      });
    
  } catch (err) {
      const customError = new CustomError({
        message: 'Failed to get checksum',
        status: error.status,
        meta: {
          error
        }
      });
      return errorResponse(customError);
  }
 
}
module.exports = {
    checkSumGenerator
}