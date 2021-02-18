'use strict';

const Parser = require('rss-parser');
const parser = new Parser();
const _ = require('lodash');

const settings = require('../../settings.json');
const { notFoundError } = require('../helpers/errorHelper');

const getFeed = async () => {
    try{
        return _.get(await parser.parseURL(settings.feedUrl), 'items', {});
    } catch(err) {
        throw notFoundError({
			message: 'Error fetching RSS feed',
			meta: {
				error: err
			}
		});
    }
    
}

module.exports = {
    getFeed
}