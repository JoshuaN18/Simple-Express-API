
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import orderResource from "./resources/orderResource.js"

app.use(orderResource);

app.get('/', function (req, res) {
  res.send('Home')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})