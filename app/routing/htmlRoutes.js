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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
   
}