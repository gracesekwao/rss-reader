
const expect = require('chai').expect;
const { getPaginatedData } = require('../../src/helpers/getPaginatedData')

describe('It should return paginated data', () => {
    const mockRequestObj = {
        query: {
            page: 1,
            limit: 5
        }
    };

    const mockData = [
        {
            'title': 'Test Title',
            'link' : 'Sample Link'
        },
        {
            'title': 'Test Title',
            'link' : 'Sample Link'
        },
        {
            'title': 'Test Title',
            'link' : 'Sample Link'
        },
        {
            'title': 'Test Title',
            'link' : 'Sample Link'
        },
        {
            'title': 'Test Title',
            'link' : 'Sample Link'
        },
        {
            'title': 'Test Title',
            'link' : 'Sample Link'
        },
        {
            'title': 'Test Title',
            'link' : 'Sample Link'
        },
        {
            'title': 'Test Title',
            'link' : 'Sample Link'
        },
        {
            'title': 'Test Title',
            'link' : 'Sample Link'
        }
    ];

    it('It should return data specified in the request', () => {
        expect(getPaginatedData(mockRequestObj, mockData).res).to.have.lengthOf(mockRequestObj.query.limit);
    });

    it('It should give give data for the next page only if its the first page', () => {
        expect(getPaginatedData(mockRequestObj, mockData).previous).to.be.undefined;
        expect(getPaginatedData(mockRequestObj, mockData).next).to.not.be.undefined;
    });

});