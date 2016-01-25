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
mongoose.connect('mongodb://localhost/angular-weekend-lab');

//require schema
var Item = require("./models/item");

// listen on port 3000
app.listen(3000, function() {
  console.log('server started');
});


app.get('/api/items', function (req, res) {
	items = Item.find(function(err, items){
		res.json(items);
	});	
});

app.post('/api/items', function (req, res) {
	var item = new Item({
		name: req.body.name,
		category: req.body.category,
		image: req.body.image
		});
	item.save(function(err, savedItem){
		res.json(savedItem);	
	});
});

app.get('/api/items/:id', function (req, res) {
	itemId = req.params.id;
	Item.find({_id:itemId}, function(err, item){
		res.json(item);
	});
});

app.delete('/api/items/:id', function (req, res) {
	itemId = req.params.id;
	Item.remove({_id:itemId}, function(err, item){
		res.json(item);
	});
});

app.put('/api/items/:id', function (req, res) {
	itemId = req.params.id;
	Item.update({_id:itemId}, req.body, function(err, editedIitem){
		Item.find({_id:itemId}, function(err, item){
			res.json(item);
		});
	});
});


// general routes
app.get('*', function (req, res) {
  res.render('index');
});
