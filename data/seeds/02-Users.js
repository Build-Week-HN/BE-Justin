exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          username: "admin",
          email: "admin@localhost.dev",
          password: "12345"
        }
      ]);
    });
};
