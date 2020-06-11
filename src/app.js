require('dotenv').config()
require("babel-core/register");
require("babel-polyfill");
const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 4000

var jsonParser = bodyParser.json()

app.get('/', jsonParser, async function (req, res) {
  res.json({
    message: "Doker is running with debugger",
  })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))