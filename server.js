// require express mongoose and bodyparser
var express = require('express'),
		app = express(),
		mongoose = require('mongoose'),
		bodyParser = require('body-parser');

// setup BodyParser to accept form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup public files (app js and main css)
app.use(express.static(__dirname + '/public'));

// setup hbs view engine
app.set('view engine', 'hbs');

//connect mongodb
mongoose.connect('mongodb://localhost/mediaCzar');

//listen port for local host
app.listen(3000, function() {
	console.log('server running');
});

// catch all route for angular
app.get('*', function (req,res) {
	res.render('index');
});