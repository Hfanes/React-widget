// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');
//new
var cors = require('cors')

// create an instance of express to serve our end points
const app = express();

//new
app.use(cors())

const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});