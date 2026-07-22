const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT
 
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is up on port " + port)
})



// kill $(lsof -t -i:27017)
// /Users/josephkwok/mongodb/bin/mongod --dbpath=/Users/josephkwok/mongodb-data