const connect = require("./configs/db")

const app = require("./index")

app.listen(5000, async ( req ,res) =>
{
    await connect()

    console.log("Connectng to the exam server")
})