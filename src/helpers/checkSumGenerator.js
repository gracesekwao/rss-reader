'use strict';

const _ = require('lodash');
const axios = require('axios');

const { errorResponse, CustomError } = require('../helpers/errorHelper');

const checkSumGenerator = async(url) => {
  try {
    const headers = await axios.head(url);
    return _.get(headers, 'headers.content-MD5', '');
    
  } catch (error) {
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