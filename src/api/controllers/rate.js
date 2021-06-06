const rateService = require('../services/rates');

const PATHS = {
    rates: '/rates/',
    storedRates: '/rates/stored-rates',
    rate: '/rate/',

};

const rateController = [
    {
        method: 'GET',
        path: PATHS.rates,
        options: {
            tags: ['api'],
            description: 'Get rates from Fixer.io API',
            handler: (request, h) => {
                const response = rateService.getRates();
                return response;
            }
        }
    },

    {
        method: 'POST',
        path: PATHS.rate,
        options: {
            tags: ['api'],
            description: 'Create a new rate',
            handler: (request, h) => {
                const res = rateService.createRate(request.payload);
                return res;
            }
        }
    },

    {
        method: 'DELETE',
        path: PATHS.rate + '{id}',
        options: {
            tags: ['api'],
            description: 'Delete a rate',
            handler: (request, h) => {
                const res = rateService.deleteRate(request.params.id);
                return res;
            }
        }
    },

    {
        method: 'GET',
        path: PATHS.storedRates,
        options: {
            tags: ['api'],
            description: 'Get all stored rates',
            handler: (request, h) => {
                const res = rateService.getStoredRates();
                return res;
            }
        }
    }
];


module.exports = rateController;