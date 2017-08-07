// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();
var fs = require('fs');
var mustache = require('mustache');
var rData = require('./data.json'); // wrap the data in a global object...
// export our router
module.exports = router;

// route for our dash
router.get('/', function(req, res) {
  res.render('pages/home');
});


router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});

router.get('/app', function(req, res){ // get the url and slug info

	// var rData = require('./data.json'); // wrap the data in a global object...

	var page = fs.readFileSync('mypage.html', "utf8"); // bring in the HTML file
	var html = mustache.render(page, {"records": rData.demoData}); // replace all of the data

	res.send(html); // send to client
});
