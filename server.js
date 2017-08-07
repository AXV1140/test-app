
// require our dependencies
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var port           = process.env.PORT || 8080;
require('./app/mock/index.js');
// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);
// use moustache layouts
var fs = require('fs');
var mustache = require('mustache');
// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// route our app
var router = require('./app/routes');
app.use('/', router);


// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log('app started -->');
});


demoData = [{ // dummy data to display
		"name":"Anurag",
		"company": "Delta",
			"data": [{
				"pos":"First"
				},{
				"pos":"Second"
				},{
				"pos":"Third"
				},{
				"pos":"Fourth"
			}]

		},{
 		"name":"Manjunath",
		"company": "HCL",
			"data": [{
				"pos":"Number1"
				},{
				"pos":"Number2"
				},{
				"pos":"Number3"
			}]
		},{
		"name":"Deepak",
		"company": "HCL America"
	}];
