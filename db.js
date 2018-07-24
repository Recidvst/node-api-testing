var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // allow Promise use
// define db endpoint
var mongoURL = 'mongodb://node-api-user:password01@ds247191.mlab.com:47191/node-api-test-clients';
if ( process.env.NODE_ENV === 'production' ) {
    mongoURL = process.env.MONGO_LIVE;
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