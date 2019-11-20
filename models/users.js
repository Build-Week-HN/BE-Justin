const db = require("../data/dbConfig");

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(param) {
  return db("users")
    .where(param)
    .first();
}

module.exports = {
  add,
  findById,
  findBy
};
