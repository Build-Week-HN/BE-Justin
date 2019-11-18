exports.up = function(knex) {
  return knex.schema.createTable("topStories", table => {
    table.integer("id");
    table.string("author");
    table.string("title");
    table.string("url");
    table.integer("comments_count");
    table.integer("score");
    table.integer("time");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("topStories");
};
