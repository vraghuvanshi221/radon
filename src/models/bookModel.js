const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{type: String,
        require:true}, 
    authorName: String, 
    prices:{
        indianPrice:String,
        euroPrice:String,
    },
    year: {type:Number,default:2021},
    tag: [String],
    
    totalpages:Number,
        stockAvailable:Boolean,
    
    },
     { timestamps: true });

module.exports = mongoose.model('BookModel', bookSchema)
