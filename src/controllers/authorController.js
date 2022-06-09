const AuthorModel= require("../models/newauthorModel")


const createAuthor = async function (req,res){
    let data = req.body
    let authordata=await AuthorModel.create(data)
    res.send({data:authordata})
}



module.exports.createAuthor= createAuthor