'use strict';

const defaultValues = {
    'PAGE': 1,
    'LIMIT': 20
}

const host = 'http://localhost:3000';

const getPaginatedData = (req, data) => {
    const page = req.query.page ? parseInt(req.query.page) : defaultValues.PAGE ;
    const limit = req.query.limit ? parseInt(req.query.limit) : defaultValues.LIMIT;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const response = {};

    if (endIndex < data.length) {
        response.next = {
            page: page + 1,
            limit,
            href: `${host}/episodes?page=${page + 1}&limit${limit}`
        };
    }

    if (startIndex > 0) {
        response.previous = {
            page: page - 1,
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