//  Dependencies
//  require path package to get the correct file path for the html
const path = require('path');

// Sets up the Express App
//  HTML GET requests for when a user "visits" a page

module.exports = function (app) {
  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
};
