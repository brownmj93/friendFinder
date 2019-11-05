
//Linking routes to data
var friendsData = require("../data/friends");

module.exports = function (app) {

  //Get request to get data JSON format
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  //Post request to store input into data
  app.post("/api/friends", function (req, res) {
    friendsData.push(req.body);
    res.json(true);
  });
};
