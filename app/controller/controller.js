var request = require('request');
var cheerio = require('cheerio');
var path = require('path');

var Story = require('../models/story.js');

module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(path.join( __dirname + '/../views/index.html'));
	})
}