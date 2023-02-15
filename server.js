const express = require('express');
const app = express();
const router = require('./routes');
const bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}));
app.use('/api',router);


app.listen(5000, () => {
  console.log('Server rodando na porta 5000');
});