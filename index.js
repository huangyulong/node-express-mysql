const express = require('express')
const app = express()
const router = require('./routers/index.js')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

app.use(bodyParser.json()) // for parse application/json
app.use(bodyParser.urlencoded({extended: true})) // for parser application/x-www-form-urlencoded
app.use('/router', router)

app.listen(3000, function() {
    console.log('server starting in port 3000')
})

