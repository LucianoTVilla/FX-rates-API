const mongoose = require ('mongoose');

const connect = async() => {
    try {
        mongoose.connect(process.env.DB_URL, 
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        
        const database = mongoose.connection;

        database.on('error', err => {
            console.log(err);
        })

        database.once('open', () => {
            console.log('Database open');
        });

        console.log('Database online');
    } catch (err) {
        console.log(err.message);
        throw new Error(err);
    }
};

module.exports = {
    connect
}