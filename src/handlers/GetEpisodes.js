'use strict';
const _ = require('lodash');

const { getFeed } = require('../requests/acastRequest');
const {  errorResponse, CustomError } = require('../helpers/errorHelper');
const { checkSumGenerator } = require('../helpers/checkSumGenerator');

module.exports = async () => {
    
    try {
        const items = await getFeed();
        const shallow = items.slice(0,15);

        const episodes = await Promise.all(
            shallow.map(async item => ({
                title: _.get(item, 'title', ''),
                link: _.get(item, 'link', ''),
                checksum: await checkSumGenerator(_.get(item, 'enclosure.url')),
            }))
        );
        return episodes;

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