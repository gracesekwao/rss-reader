'use strict';
const _ = require('lodash');

const { getFeed } = require('../requests/acastRequest');
const {  errorResponse, CustomError } = require('../helpers/errorHelper');
const { checkSumGenerator } = require('../helpers/checkSumGenerator');

module.exports = async () => {
    
    try {
        const items = await getFeed();
        const response = await items.map((item) => {
            const episodeObj = {};
            episodeObj.title = _.get(item, 'title', '');
            episodeObj.url= _.get(item, 'link', '');
            console.log(checkSumGenerator())
            const enclosureUrl = _.get(item, 'enclosure.url');
            episodeObj.checkSum = enclosureUrl ? checkSumGenerator(enclosureUrl) : null;
            return episodeObj;
        });

        return response;

    } catch(error) {
        const customError = new CustomError({
			message: 'Failed to get episodes',
			status: error.status,
			meta: {
				error
			}
		});
		return errorResponse(customError);
    }

}