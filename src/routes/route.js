const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook  )

router.get("/getBookList", BookController.getBookList)
router.post("/getBooksinYear", BookController.getBooksInYear)
router.post("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.get("/getRandomBooks", BookController.getRandomBooks)



module.exports= router;