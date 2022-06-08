const { count } = require("console");
const authorModel = require("../models/authorModel");
const BookModel= require("../models/bookModel")

const bookEntry=async function(req,res){
    let data=req.body
    let saveData=await BookModel.create(data)  
    res.send(saveData)
};

const getBooksbyChetanBhagat = async function (req,res){
    let data = await authorModel.find({author_name:"Chetan Bhagat"})
    let bookData = await BookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
};

const authorofBook= async function (req, res) {
    let data=await BookModel.findOneAndUpdate({name:"two states"},{$set:{price:100}},{new:true})
    let authorData=await authorModel.find({author_id:data.author_id}).select({author_name:1})
    let price= data.price
       
       res.send( { msg: authorData,price})
  };

  const findAuthor = async function (req,res){
      let data = await BookModel.find({ price : { $gte: 50, $lte: 100} } ).select({author_id:1,_id:0})
      let authorData= await authorModel.find({author_id:data.map(x=>x.author_id)}).select({author_id:1,author_name:1,_id:0})
      res.send({msg:authorData})
  }

module.exports.bookEntry= bookEntry;
module.exports.getBooksbyChetanBhagat= getBooksbyChetanBhagat
module.exports.authorofBook = authorofBook
module.exports.findAuthor=findAuthor
