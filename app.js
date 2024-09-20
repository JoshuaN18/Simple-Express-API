import morgan from 'morgan';
import logger from './utils/logger.js';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import orderResource from "./resources/orderResource.js"

app.use(express.json());

app.use(orderResource);

app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));
app.use((err, req, res, next) => {
  logger.error(`${err.status || 500} - ${err.message}`);
  res.status(err.status || 500).send('Server Error');
});


app.get('/', function (req, res) {
  res.send('Nothing Here')
})

app.listen(3000, function () {
  console.log('Listening on port 3000...')
})