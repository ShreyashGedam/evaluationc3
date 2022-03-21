const express = require("express")

const app = express()

const usercontroller = require("./controllers/user.controller")

const bookcontroller = require("./controllers/books.controllerl")

app.use(express.json())

app.use("/users", usercontroller)

app.use("/books",bookcontroller)

module.exports = app