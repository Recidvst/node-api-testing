// get mongoose to work with mongodb
const mongoose = require('mongoose');
// define a schema
var Schema = mongoose.Schema;
var clientSchema = new Schema({
    slug: {
        type: String,
        Required: 'Add a slug'
    },
    name: {
        type: String,
        Required: 'Add a name',
        default: 'New Client'
    },
    url: {
        type: String,
        Required: 'Add a url'
    },
    arrayTest: {
        type: Array
    }
})

// export the schema as a model for use in app
module.exports = mongoose.model('Clients', clientSchema);