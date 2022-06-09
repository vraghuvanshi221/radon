const PublisherModel = require('../models/newPublisherModel')


const createPublisher = async function(req,res){
    let data=req.body
    let Publisherdata= await PublisherModel.create(data)
    res.send({data:Publisherdata})
} 


module.exports.createPublisher=createPublisher


