const db = require("../data/dbConfig");

function returnAll() {
  return db("topStories");
}

function add(story) {
  return db("topStories")
  .insert(story);
}

function cleanUp() {
  return db("topStories")
  .truncate();
}

module.exports = {
  returnAll,
  add,
  cleanUp
};