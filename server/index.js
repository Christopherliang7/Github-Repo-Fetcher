const express = require('express');
const getRepo = require('../helpers/github.js');
const saveToDb = require('../database/index.js')

let app = express();

app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  let username = req.body.username;
  // console.log(username);
  // get repos by username
  getRepo.getReposByUsername(username);
  // iterate through repos
  // save information onto database
  // saveToDb.save();

  // res.send to end POST request
  res.send()
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

