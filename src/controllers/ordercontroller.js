const {count} = require("console")
const orderModel = require("../models/orderModel")



const createOrder = async function(req,res){
    let data = req.body
    let productId=data.product_id
    if(!productId) return res.send ({msg:"productid is mandatory in the request"})

    let userId = data.user_Id
    if (!userId) return res.send({msg:"userId is mandatory in the request"})

    let savedData= await orderModel.create(data)
    res.send({msg:savedData})


}

const getOrderData = async function (req,res){
    let allProduct = await orderModel.find().populate["user_id", "product_id"]
}

module.exports.createOrder=createOrder
module.exports.getOrderData=getOrderData