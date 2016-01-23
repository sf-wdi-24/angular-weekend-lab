var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// send and receive JSON data
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/(XXXXXXXXXXXXXXX)');

// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});

// routes
app.get('*', function (req, res) {
  res.render('index');
});


app.get('/api/todos', function (req, res) {

});

app.post('/api/todos', function (req, res) {

});

app.get('/api/todos/:id', function (req, res) {

});

app.put('/api/todos/:id', function (req, res) {

});

app.delete('/api/todos/:id', function (req, res) {
	
});
