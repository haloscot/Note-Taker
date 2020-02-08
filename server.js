// Dependencies
var express = require("express");
var fs = require("fs");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
var counter = 0;
var ID = function(){
    counter++;
    this.name = counter;
}
var notes = [
  {
    routeID: ID,
    note: "this is a note",
  },
];

// Routes

// Returns all saved notes as JSON
app.get("/api/notes", function(req, res) {
  return res.json(notes);
});

// Recieves a new note to save on  request body, 
// adds to the `db.json` file, and returns new note to client.
app.post("/api/notes", function(req, res) {
  var newNote = req.body;

  console.log(newNote);

  notes.push(newNote);

  res.json(newNote);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Recieves a query paramter containing the id of a note to delete.
app.delete("/api/notes/:id", function(req, res) {

});
