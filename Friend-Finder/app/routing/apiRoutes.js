// DATA
var friendData = require("../data/friends");


// ROUTING
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    req.body.pet = false;
    console.log(newFriend);

    var bffName;
    var bffPhoto;
    var initialComparison = 100;

    for (i=0;i<friendData.length;i++) {
      var totalDifference = 0;
      
      for (j=0;j<friendData[i].scores.length;j++) {
        totalDifference += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friendData[i].scores[j]));
      console.log(totalDifference);
      }
      if (totalDifference < initialComparison && friendData[i].pet === true) {
        initialComparison = totalDifference;
        bffName = friendData[i].name;
        bffPhoto = friendData[i].photo;
        console.log(bffName);
      }
    }

    friendData.push(newFriend);

    res.json({bffName: bffName, bffPhoto: bffPhoto});

    });
}
