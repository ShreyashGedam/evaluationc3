const express = require("express")

const router = express.Router()

const Comment = require("../models/comment.model")

router.get("" , async (req , res ) =>
{
    const user = await Comment.find().lean().exec()

    return res.send(user)
})

router.post(" " , async (req , res) =>
{
    const user = await Comment.create(req.body)

    return res.send(user)
})

module.exports = router