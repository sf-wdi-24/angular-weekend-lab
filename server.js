//require modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
//config body parser to retrieve form data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//use static files from public folder
app.use(express.static(_dirname + '/public'));
//set view engine to handlebars
app.set('view engine', 'hbs');
//connect to mongodb
mongoose.connect('mongodb://localhost/ng-soundcloud');
//require music model
// var Track = require('./models/track');


//API ROUTES//

//Get all tracks//
app.get('/api/tracks', function(req, res) {
  //find all tracks in db
  Track.find(function(err, allTracks) {
    if (err) {
      res.status(500).json({error: err.message});
    } else {
      res.json(allTracks);
    }
  });
});
//create new track//
app.post('api/tracks', function(req, res) {
  var newTrack = new Track(req.body);

  //save track to db
  newTrack.save(function(err, savedTrak) {
    if (err) {
      res.status(500).json({error: err.messages});
    } else {
      res.json(savedTrack);
    }
  });
});







app.get('*', function(req, res) {
  res.render('index');
});







//listen to port 3000
app.listen(3000, function() {
  console.log('meow server');
});