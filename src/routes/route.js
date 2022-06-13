const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const ProductController=require("../controllers/productcontroller")
const OrderController=require("../controllers/ordercontroller")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/orderdetail",OrderController.createOrder)
router.post("/productdetail",ProductController.createProduct)
router.post("/userdetail",commonMW.mid1,UserController.createUser)
router.get("/orderdata",OrderController.getOrderData)
router.get("/basicRoute",commonMW.mid1)




module.exports = router;