require('dotenv').config()
const db = require('./src/database/db');
const Hapi = require( '@hapi/hapi' );

//DOCS Dependencies
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

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

    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version: Pack.version,
            },
        };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    server.realm.modifiers.route.prefix = '/api'
    routes(server);

    await server.start();
    console.log('Server running on: ', PORT);

};

init();

