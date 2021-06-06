const mongoose = require('mongoose');

const Rate = mongoose.model('Rate', { 
    pair: {
        type: String,
        required: [true, 'Pair is requried']
    },

    originalRate: {
        type: Number,
        required: [true, 'Original rate is required']
    },

    feePercentage: {
        type: Number,
        default: 0,
    },

    feeAmount: {
        type: Number,
        required: [true, 'Amount is required']
    },

    rateWithMarkupFee: {
        type: Number,
        required: [true, 'Rate with markup is required']
    }
});

module.exports = Rate;