const authorModel= require("../models/authorModel")


const authorDetails=async function(req,res){
    let data=req.body
    let saveData=await authorModel.create(data)
    res.send(saveData)
};
module.exports.authorDetails= authorDetails
   