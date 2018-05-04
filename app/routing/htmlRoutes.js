// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
// Create a function which handles incoming requests and sends responses





module.exports = function(app) {

  app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/error", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/err.html"));
    });
  
  app.get("/friendlist", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/friendList.html"));
      });
}






// Create New friends - takes in JSON input
// app.post("/api/friends", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newfriend = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newfriend);

//   characters.push(newfriend);

//   res.json(newfriend);
// });

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

// function handleRequest(req, res) {

//     // Capture the url the request is made to
//     var path = req.url;
  
//     // Depending on the URL, display a different HTML file.
//     switch (path) {
//       //routing
  
//     case "/":
//       return displayHome(path, req, res);
//       break;
  
//     case "/survey":
//       return displaySurvey(path, req, res);
//       break;
  
//       //default in case doesn't match anything
//     default:
//       return display404(path, req, res);
//       break;
//     }
//   }

//   function displayHome(url, req, res) {
//     var myHTML = "<a href='./public/home.html'>Home</a>"
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(myHTML);
//   }

//   function displaySurvey(url, req, res) {
//     var myHTML = "<a href='./public/survey.html'>Survey</a>"
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(myHTML);
//   }

//   function display404(url, req, res) {
//     var myHTML = "<html>" +
//     "<body><h1>404 Not Found </h1>" +
//     "<p>The page you were looking for: " + url + " can not be found</p>" +
//     "</body></html>";
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(myHTML);
//   }
