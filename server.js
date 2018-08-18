const express = require('express');
const bodyParser = require('body-parser');

//  create an express server
const app = express();
//  set an initial port
const PORT = process.env.PORT || 3000;

//  parse the application.x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//  parse the application/json
app.use(bodyParser.json());

//  route files
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


// Start our server
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});

