const User = require("../models/user.model")

const { body, validationResult } = require('express-validator');


const express = require("express")

const router = express.Router()

const uploads = require("../middlewares/uploads")

router.get("", async( req , res) =>
{
    const user = await User.find().lean().exec()

    return res.send(user)
})

router.post("", uploads.single("profileimage"),
body("firstname")
.not()
.isEmpty()
.isLength({min : 3})
.isLength({max : 3}),
async ( req , res) =>
{
    const user = await User.create({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        age : req.body.age,
        email : req.body.email,
        profileimage : req.file.path
    })

    return res.send(user)
})

module.exports = router