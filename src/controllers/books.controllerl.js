const Book = require("../models/books.model")

const express = require("express")

const router = express.Router()

const uploads = require("../middlewares/uploads")

router.get("" , async (req , res ) =>
{
    const user = await Book.find().lean().exec()

    return res.send(user)
})

router.post("" , uploads.single("coverimage") ,async ( req , res) =>
{
    const book = await Book.create({
        likes : req.body.likes,
        coverimage : req.file.path,
        content : req.body.content
    })

    return res.send(book)
})

module.exports = router
