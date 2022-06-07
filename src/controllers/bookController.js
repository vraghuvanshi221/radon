const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookList= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}

const getBooksInYear = async function(req,res) {
    let data=req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getParticularBooks= async function(req,res){
    let data=req.body
    let allUsers= await BookModel.find(data)
    res.send({msg: allUsers})
}


    const getXINRBooks = async function(req,res){
        let inrBooks= await BookModel.find({price,indianPrice:{$in:["100INR","200INR","500INR"]}})
       
       res.send({msg: inrBooks})
   }

const getRandomBooks = async function (req,res){
    let allUsers = await BookModel.find()
    res.send({msg:allUsers})
}

module.exports.createBook=createBook
module.exports.getBookList=getBookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks