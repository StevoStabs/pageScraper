//Dependencies
var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.text());
app.use(bodyparser.json({type:'application/vnd.api+json'}));
app.use(express.static('views'));

app.use(morgan('dev'));

//Database configuration
mongoose.connect('');
var db = mongoose.connection;


//Connect
db.on('error', function (err) {
    console.log('Error: ', err);
});
db.once('open', function () {
    console.log('Success!');
});



// Routes
require('./app/controller/controller.js')(app)


var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log('Server listening on port: ' + PORT);
});
