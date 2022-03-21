const express = require("express")

const router = express.Router()

const Public = require("../models/publication.model")

router.get("" , async (req , res ) =>
{
    const user = await Public.find().lean().exec()

    return res.send(user)
})

router.post(" " , async (req , res) =>
{
    const user = await Public.create(req.body)

    return res.send(user)
})

module.exports = router