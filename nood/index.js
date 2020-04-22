var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')


app.use(cors())

app.use(bodyParser.json())


app.get("/", (req, res) =>{
    res.send("Yes good!")
})

app.post("/addUser", (req, res) => {
    console.log(req.body)
})


app.listen(4200, () => console.log("Listening Port 4200"));