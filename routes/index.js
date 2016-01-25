var express = require('express');
var router = express.Router();

var photos = [
	{
		url: 'https://farm3.staticflickr.com/2814/9056083794_4ae18d5d57_b.jpg',
		attribution: 'https://www.flickr.com/photos/chanc/',
		latitude: 37.786428,
		longitude: -122.408064
	},
	{
		url: 'https://farm7.staticflickr.com/6165/6196724899_6ed2b786e9_b.jpg',
		attribution: 'https://www.flickr.com/photos/darwinbell/',
		latitude: 37.776948,
		longitude: -122.434489
	},
	{
		url: 'https://farm2.staticflickr.com/1010/1285368842_81d9342b0b_b.jpg',
		attribution: 'https://www.flickr.com/photos/araswami/',
		latitude: 37.794491,
		longitude: -122.392982
	},
	{
		url: 'https://farm3.staticflickr.com/2778/4083210234_0e4f013454_b.jpg',
		attribution: 'https://www.flickr.com/photos/dahlstroms/',
		latitude: 37.799629,
		longitude: -122.415816
	}
];

router.get('/random.json', function(req, res, next) {
	setTimeout(function() {
		res.json(photos[Math.floor(Math.random()*photos.length)]);
	}, 1000);
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;