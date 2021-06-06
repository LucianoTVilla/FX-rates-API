require('dotenv').config()
const db = require('./src/database/db');
const Hapi = require( '@hapi/hapi' );

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || 'localhost';

routes = require('./src/api/controllers/routes_generator');


const init = async () => {
    await db.connect();

    const server = new Hapi.server({
        port: PORT,
        host: HOST, 
        routes: { cors: true }
    });

    server.realm.modifiers.route.prefix = '/api'
    routes(server);

    await server.start();
    console.log('Server running on: ', PORT);

};

init();

