const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const authorController= require('../controllers/authorController')
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post('/bookData',bookController.bookEntry);
router.post('/authorData',authorController.authorDetails);
router.get('/getBooksbyChetanBhagat',bookController.getBooksbyChetanBhagat);
router.get('/authorofBook',bookController.authorofBook);
router.get('/findAuthor',bookController.findAuthor)

module.exports = router;
      