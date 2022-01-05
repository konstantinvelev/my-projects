const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3005,
        dbURL: 'mongodb://localhost:27017/wildlife-photography',
        origin: ['http://localhost:3006', 'http://localhost:3006']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: []
    }
};

module.exports = config[env];