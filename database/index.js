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

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

}

module.exports.save = save;