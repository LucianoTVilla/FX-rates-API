const rateService = require('../services/rates');

const PATHS = {
    rates: '/rates/',
    rate: '/rate/',
    storedRates: '/rate/stored-rates',
};

const rateController = [
    {
        method: 'GET',
        path: PATHS.rates,
        handler: (request, h) => {
            const response = rateService.getRates();
            return response;
        }
    },

    {
        method: 'POST',
        path: PATHS.rate,
        handler: (request, h) => {
            const res = rateService.createRate(request.payload);
            return res;
        }
    },

    {
        method: 'DELETE',
        path: PATHS.rate + '{id}',
        handler: (request, h) => {
            const res = rateService.deleteRate(request.params.id);
            return res;
        }
    },

    {
        method: 'GET',
        path: PATHS.storedRates,
        handler: (request, h) => {
            const res = rateService.getStoredRates();
            return res;
        }
    }
];


module.exports = rateController;