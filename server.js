var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");


var app = express();
var PORT = process.env.PORT || 3000;;
//var server = http.createServer(handleRequest);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, './app/public')));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// const htmlRoutes = require('./app/routing/htmlRoutes');
// app.use('/', htmlRoutes);

// const api = require('./app/routing/apiRoutes');
// app.use('/', api);

// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.redirect('/app/public/err.html');
// });

//var friends = [];

// Start our server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

//module.exports = router;
