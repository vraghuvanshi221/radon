const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema( {
   user_id:{
    type:ObjectId,
    ref:"UserDB",
  },
  product_id:{
    type:ObjectId,
    ref:"productdb"
  },
  amount:Number,
  isFreeAppUser:Boolean,
  Date : { type : Date,
     default: Date.now
     }
 

}, { timestamps: true });

module.exports = mongoose.model('ORDER', orderSchema)

