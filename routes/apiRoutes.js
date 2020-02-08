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
  });

  app.delete("/api/notes/:id", function(req, res) {
      var delID = req.params.id ;
     fs.readFile("../Develop/db/db.json", 'utf8', (err,data) => {
          data = JSON.parse( data );
     
     delete data[delID];
     
     console.log( JSON.stringify(data) );
     res.status(200);
     
     return res.send("Removed");
     });
     
  });

};