const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost', {useMongoClient: true});
// Took fetcher out and database works.

// once connection is created - create a schema to be derived by the model
let repoSchema = mongoose.Schema({
  id: Number,
  repo_name: String,
  owner_name: String,
  owner_id: Number,
  url: String,
  description: String,
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
  console.log('Save function in progress!');
  console.log('Save is running on: ', repo);
  // Repo.findOneAndUpdate({
  //   {link: repo.url},
  //   {
  //     id: repo.id,
  //     repo_name: repo.name,
  //     owner_name: repo.owner.login,
  //     owner_id: repo.owner.id,
  //     link: repo.url;
  //     description: repo.description,
  //     forks: repo.forks
  //   },
  //   {upsert: true}
  // })
  let newRepo = new Repo({
    id: repo.id,
    repo_name: repo.name,
    owner_name: repo.owner.login,
    owner_id: repo.owner.id,
    link: {type: repo.url, unique: true},
    description: repo.description,
    forks: repo.forks
  });

  console.log('This is the new Repo: ', newRepo);

  newRepo.save((err, data) => {
    if (err) {
      console.log('Error in saving new repo to database.', err);
    } else {
      console.log('Success in saving new repo to database!')
      console.log('This is saved data: ', data)
    }
  })
}

let retrieve = () => {
  return Repo.find().sort('-forks').limit(2).exec();
}

module.exports.save = save;
module.exports.retrieve = retrieve;