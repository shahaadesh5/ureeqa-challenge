const express = require("express");
const bodyParser = require('body-parser'); //body-parser used to get form data

const primeRoute = require('./routes/prime');

const app = express();

//setting boy-parser form-data limit 
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

app.use('/prime', primeRoute)

module.exports = app;
