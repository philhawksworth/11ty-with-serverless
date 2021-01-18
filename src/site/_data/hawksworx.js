const axios  = require('axios');

var url = `https://www.hawksworx.com/feed.json`;

module.exports = () => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  })
}