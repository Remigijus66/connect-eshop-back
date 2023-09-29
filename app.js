const express = require("express")
const cors = require("cors")
const app = express()
const mainRouter = require('./router/mainRouter')
require("dotenv").config()
const colors = require('colors')
const port = process.env.PORT || 4001;


const http = require("http").createServer(app)


http.listen(port, () => console.log(`Server online on port ${port}`.bgYellow.bold))


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}))

app.use(express.json())
app.use('/', mainRouter)

