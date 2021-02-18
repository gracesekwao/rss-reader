'use strict';

const Parser = require('rss-parser');
const parser = new Parser();
const _ = require('lodash');

const settings = require('../../settings.json');
const {  errorResponse, CustomError } = require('../helpers/errorHelper');

const getFeed = async () => {
    try{
        return _.get(await parser.parseURL(settings.feedUrl), 'items', {});
    } catch(err) {
        const customError = new CustomError({
			message: 'Failed to parse RSS Feed',
			status: error.status,
			meta: {
				error
			}
		});
		return errorResponse(customError);
    }
    
}

module.exports = {
    getFeed
}