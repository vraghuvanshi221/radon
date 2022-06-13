const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    name:String,
    categories:String,
    Price:{
        type:Number,
        required:true,
    }
 },
 
 { timestamps: true });


module.exports = mongoose.model('productdb', productSchema)
