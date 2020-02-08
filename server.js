// Dependencies
var express = require("express");
var fs = require("fs");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes saved in /routes

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
