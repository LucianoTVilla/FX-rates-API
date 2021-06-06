const fixer = require('./fixer');
const Rate = require('../models/rate');

const getRates = () => { return fixer.getRates(); };

const createRate = async({pair, originalRate, feePercentage, feeAmount, rateWithMarkupFee}) => {
    try {
        const rate = new Rate({pair, originalRate, feePercentage, feeAmount, rateWithMarkupFee});
        const res = await rate.save();
        return res;
    } catch (err) {
        console.log(err);
        return err.errors;
    }
};

const deleteRate = (id) => {
    try {
        const rate = Rate.findByIdAndDelete(id);
        return rate;
    } catch (err) {
        console.log(err);
    }
};

const getStoredRates = async () => {
    try {
        const rates = await Rate.find();
        return rates;
    } catch (err) {
        console.log(err);
        return err.errors;
    }
}

module.exports = {
    getRates,
    createRate,
    deleteRate,
    getStoredRates,
};

