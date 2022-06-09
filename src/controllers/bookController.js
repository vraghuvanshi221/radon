const newauthorModel = require("../models/newauthorModel")
const bookModel= require("../models/newbookModel")
const newPublisherModel = require("../models/newPublisherModel")


const createBook= async function (req, res) {
    let book = req.body
    let authorid=book.author_id
    if (!authorid)
    return res.send("author_id must be present")

    let publisherid =book.publisher_id
    if (!publisherid)
    return res.send("publisher id must be present")

    let checkAuthorId=await newauthorModel.findById(authorid)
    if (!checkAuthorId)
    return res.send("this is not valid id")

    let checkPublisherId =await newPublisherModel.findById(publisherid)
    if (!checkPublisherId)
    return res.send("Enter valid id")

 let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const fetchdata = async function (req,res){
    let data = await bookModel.find().populate("publisher_id").populate("author_id")
    res.send({data:data})
}





module.exports.createBook= createBook
module.exports.fetchdata=fetchdata
