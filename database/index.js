const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// Send yourself a notification if connection was sucessful or not
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Successful Connection!')
// });

// once connection is created - create a schema to be derived by the model
let repoSchema = mongoose.Schema({
  id: Number, // repo Id
  repo_name: String,
  owner_name: String,
  owner_id: Number,
  url: String,
  forks: String
});

// once schema is created - compile schema into a model
let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // create a new model repo
  // insert parameters into model based on repo given
  // save this repo into mongo database

  let newRepo = new Repo({
    id: repo.id,
    repo_name: repo.name,
    owner_name: repo.owner.login,
    owner_id: repo.owner.id,
    url: repo.ownder.url,
    forks: repo.forks
  }).save((err, data) => {
    if (err) {
      console.log('Error in saving new repo to database.')
    } else {
      console.log('Success in saving new repo to database!')
    }
  })
}

module.exports.save = save;