const rateController = require('./rate');

const createRoutes = (server) => {
    server.route(rateController);
}

module.exports = createRoutes;