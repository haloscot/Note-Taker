// ===============================================================================
// LOAD DATA
// ===============================================================================

var notesData = require("../Develop/db/db");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(notesData);
  });


  app.post("/api/notes", function(req, res) {
    notesData.push(req.body);
    console.log(req.body)
  })
};