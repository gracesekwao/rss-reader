'use strict';
const { badRequestError } = require('../helpers/errorHelper');

const settings = require('../../settings.json');

const defaultValues = {
    'PAGE': 1,
    'LIMIT': 20
}

const host = settings.host;

const getPaginatedData = (req, data) => {

    const page = req.query.page ? parseInt(req.query.page) : defaultValues.PAGE ;
    const limit = req.query.limit ? parseInt(req.query.limit) : defaultValues.LIMIT;
    const pageCount = Math.floor(data.length - 1 / limit);

    if(page < 1 || page > pageCount) {
        return badRequestError({message: 'Invalid Page Number', url: req.originalUrl});
    }

    if(limit <= 0 || limit > pageCount) {
        return badRequestError({message: 'Invalid Limit', url: req.originalUrl});
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const response = {};

    if (endIndex < data.length) {
        response.next = {
            page: page + 1,
            pageCount, 
            limit,
            href: `${host}/episodes?page=${page + 1}&limit${limit}`
        };
    }

    if (startIndex > 0) {
        response.previous = {
            page: page - 1,
            pageCount,
            limit,
            href: `${host}/episodes?page=${page - 1}&limit${limit}`
        }
    }
    response.res = data.slice(startIndex, endIndex);

    return response;
};

module.exports = {
    getPaginatedData
}