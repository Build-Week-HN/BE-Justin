const db = require("../data/dbConfig");

module.exports = {
  returnAll: function() {
    return db("topStories");
  },
  add: function(story) {
    return db("topStories")
    .insert(story);
  },
  cleanUp: function() {
    return db("topStories")
    .truncate();
  }
};