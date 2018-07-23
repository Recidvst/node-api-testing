var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // allow Promise use
// define db endpoint
var mongoDB = 'mongodb://node-api-user:password01@ds139841.mlab.com:39841/recidvst-node-api-test';
// connect db
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
// error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// mongoose.connect('mongodb://node-api-user:password01@ds139841.mlab.com:39841/recidvst-node-api-test', { useNewUrlParser: true });