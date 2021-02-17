'use strict';

const Parser = require('rss-parser');
const parser = new Parser();
const _ = require('lodash');

const { notFoundError } = require('../helpers/errorHelper');

const getFeed = async () => {
    try{
        return _.get(await parser.parseURL('https://rss.acast.com/varvet'), 'items', {});
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