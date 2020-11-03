const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

// once connection is created - create a schema to be derived by the model
let repoSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  repo_name: {type: String},
  owner_name: {type: String},
  owner_id: {type: Number},
  url: {type: String},
  forks: {type: String}
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
  console.log('Save function in progress!');
  console.log('Save is running on: ', repo);

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
      console.log('This is saved data: ', data)
    }
  })
}

module.exports.save = save;