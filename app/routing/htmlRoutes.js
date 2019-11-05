
//Declare path package as a variable
var path = require("path");

module.exports = function (app) {

  //Uses get request to show html pages
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
