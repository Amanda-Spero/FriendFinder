const friends = require('../data/friends');

//  A GET route with the url /api/friends. This will be used
//  to display a JSON of all possible friends.

module.exports = function (app) {
  app.get('/api/friends', (req, res) => {
    res.json(friends);
  });


  //  A POST routes /api/friends. This will be used to handle
  //  incoming survey results. This route will also be used to
  //  handle the compatibility logic.

  //  Create New friends - takes in JSON input
  app.post('/api/friends', (req, res) => {
    //  this object will hold the best friend match

    const bestMatch = {
      name: '',
      photo: '',
      friendDifference: 1000,
    };

    //  we take the results of the user's survey POST and parse it
    const userData = req.body;
    const userScores = userData.scores;

    //  holds the total difference between each friend's
    //  survey total and the new user's total
    let totalDifference;

    //  loop through all of the friends in the database
    for (let i = 0; i < friends.length; i += 1) {
      const currentFriend = friends[i];
      totalDifference = 0;


      //  loop through all of the scores
      for (let j = 0; j < currentFriend.scores.length; j += 1) {
        const currentFriendScore = currentFriend.scores[j];
        const currentUserScore = userScores[j];

        //  calculate the difference in the scores
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      //  if the sum of the differences is less than the
      //  currentbest match, make that friend the new best match
      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
      console.log(bestMatch.name);
    }

    //  push the new user into the database
    friends.push(userData);

    res.json(bestMatch);
  });
};
