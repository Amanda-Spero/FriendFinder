var friendData = require("../data/friends");
var path = require('path');
var bodyParser = require("body-parser");
var http = require("http");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    return res.json(friendData);
  });


// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Create New friends - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    for(var i = 0; i < friendData.length; i++){
        var scoresDiff = 0;
        for(var j = 0; j < newFriendScores.length; j++){
            scoresDiff += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(newFriendScores[j])));
        }
        scoresArray.push(scoresDiff);
        console.log(scoresDiff);
    }
    for(var i = 0; i < scoresArray.length; i++){
        if (scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
            console.log(bestMatch);
        }
    }

    var bff = friendList[bestMatch];
    console.log(bff);
    res.json(bff);

    friendData.push(req.body);
    //res.json(true);

})

app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendData = [];  
});


}