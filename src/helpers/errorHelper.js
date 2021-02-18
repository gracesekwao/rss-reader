'use strict';

const errorCodes = {
	UNKNOWN: 1,
	PARTIAL_RESPONSE: 2,
	NOT_FOUND: 3,
};

const httpStatus = {
    NOT_FOUND: 404,
    BAD_REQUEST: 400
}

class CustomError extends Error {
	constructor(settings) {
		super(settings.message);

		this.errorMessage = settings.message;
		this.code = settings.code || errorCodes.UNKNOWN;
		this.status = settings.status;
		this.meta = settings.meta;
		this.url = settings.url;
	}
}

function notFoundError(settings) {
	return new CustomError(Object.assign(
		{
			status: httpStatus.NOT_FOUND,
			code: errorCodes.NOT_FOUND
		}, settings));
}

function badRequestError(settings) {
	return new CustomError(Object.assign(
		{
			status: httpStatus.BAD_REQUEST
		}, settings));
}

function errorResponse(error) {
	return {
		error: {
			statusCode: error.status,
			errorCode: error.code,
			error: error.message,
		}
	};
}

module.exports = {
	badRequestError,
	CustomError,
	notFoundError,
    errorResponse,
    errorCodes
};
