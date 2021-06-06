const axios = require('./axios_service');

const getRates = async() => {
    try {
        const response = await axios.get('');
        return response.data;
    } catch(err) {
        console.log(err);
        return err;
    }
};

module.exports = {
    getRates
}
