const express = require('express');
const { getReposByUsername } = require('../helpers/github.js');
const { save, retrieve } = require('../database/index.js');

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
  getReposByUsername(username)
    .then((results) => {
      let data = results.data
      for (let i = 0; i < data.length; i++) {
        save(data[i]);
      }
    })
  res.send()
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  retrieve().then((repos) => {
    console.log(repos)
    res.status(200).send(repos)
  }).catch((err) => {
    res.sendStatus(500);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

