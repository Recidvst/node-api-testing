const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // allow Promise use
// config/env
const CONFIG = require('./config');

// define db endpoint
let mongoURL = CONFIG.MONGO_DEV;
if ( process.env.NODE_ENV === 'production' ) {
    mongoURL = process.env.MONGO_LIVE || CONFIG.MONGO_LIVE;
}
// connect db
mongoose.connect(mongoURL, { useNewUrlParser: true });
var db = mongoose.connection;

// test connection
db.on('connected', () => {
    console.log('Mongoose connected to ' + mongoURL);
});

// error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db