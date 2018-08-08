// get mongoose to work with mongodb
const mongoose = require('mongoose');
// define a schema
const Schema = mongoose.Schema;
let bookSchema = new Schema({
    title: {
        type: String,
        required: 'Add a title for this book'
    },
    slug: {
        type: String,
        required: 'Add an unique slug for this book'
    },
    author: {
        type: String,
        required: 'Add an author for this book'
    },
    publishYear: {
        type: Date,
        required: 'Which year was the book pubished?'
    },
    description: {
        type: String,
        required: 'Add a short description of the book'
    },
    language: {
        type: String
    }
}, {
    timestamps: true
});

// export the schema as a model for use in app
module.exports = mongoose.model('Book', bookSchema, 'Books'); // mongo sometimes needs the collection name specifying..