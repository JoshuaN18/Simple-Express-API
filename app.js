require('dotenv').config();
var express = require('express')
var app = express()
const queries = require('./queries')

app.get('/', function (req, res) {
  queries.getAll().then(results => res.send(results))
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})