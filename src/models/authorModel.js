const mongoose = require('mongoose');

const authorDetails = new mongoose.Schema({

    author_id: {
        type: Number,
        unique: true,
        required: true
    },
    author_name: "String",
    age: Number,
    address: "String"

}, { timestamps: true });

module.exports = mongoose.model('author', authorDetails) //users



// String, Number
// Boolean, Object/json, array
