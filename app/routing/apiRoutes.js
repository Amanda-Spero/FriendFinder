var friendData = require("../data/friends");

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    return res.json(friendData);
  });

//   app.get("/api/friends", function(req, res) {
//     return res.json(friendData);
//   });

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Create New friends - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    friendData.push(req.body)
    res.json(true);



    // var friendInfo = req.body;
    // var friendAnswers = friendInfo.scores
    // console.log(friendInfo);
    // console.log(friendAnswers);
    // //??
    // //res.json(true);
    // var matchName = "";
    // var matchImage = "";
    // var totalDifference = 10000;

    // //friends.length??
    // for (var i = o; i < friends.length; i++){
    //     var diff = 0;
    // //userResponses.length?
    //     for (var j = 0; j<newfriend.length; j++) {
    //         dif += Math.abs(friendsArray[i].scores[j] - newfriend[j]);
    //     }
    //     if (diff < totalDifference) {
    //         totalDifference = diff;
    //         matchName = friendsArray[i].name;
    //         matchImage = friendsArray[i].photo;

    //     }
    // }
    // res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

});
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

    //?
    // newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  
    // console.log(newfriend);
  
    // characters.push(newfriend);
  
    // res.json(newfriend);
    //?
    app.post("/api/clear", function() {
      // Empty out the arrays of data
      friendData = [];  
      console.log(friendData);
    });
}
