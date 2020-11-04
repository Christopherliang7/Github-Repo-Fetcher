const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (user) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'axios',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios.get(options.url, options.headers)
    .then(response => {
      console.log('Success!');
      return response;
    }).catch(error => {
      console.log('Error');
    });
}

module.exports.getReposByUsername = getReposByUsername;