
// --------------------------------------------------------------  //
var express = require('express');
var app = express();
var htmlRoutes = require('./server/htmlRoutes');
var apiRoutes = require('./server/apiRoutes');
// var mongoController = require('./server/mongoCtrl');
// var mongoUtil = require('./server/mongoCtrl');
// mongoUtil.connect();

// --------------------------------------------------------------  //
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

// --------------------------------------------------------------  //
htmlRoutes(app);
apiRoutes(app);
// mongoController(app);

var port = process.env.PORT || 3000;
app.listen(port);
