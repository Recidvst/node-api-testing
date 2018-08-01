// get mongoose to work with mongodb
const mongoose = require('mongoose');
// define a schema
const Schema = mongoose.Schema;
let clientSchema = new Schema({
    slug: {
        type: String,
        required: 'Add a slug'
    },
    name: {
        type: String,
        default: 'New Client'
    },
    url: {
        type: String,
        default: 'Client site url'
    },
    staging: {
        type: String,
        default: 'n/a'
    },
    login: {
        type: String,
        default: 'n/a'
    },
    hosting: {
        type: String,
        default: 'n/a'
    },
    hostingurl: {
        type: String,
        default: 'n/a'
    },
    siteType: {
        type: String,
        default: 'n/a'
    },
    retained: {
        type: Boolean,
        default: false
    },
    retainer: {
        type: Number,
        default: 4
    }
}, {
    timestamps: true
});

// export the schema as a model for use in app
module.exports = mongoose.model('Client', clientSchema);