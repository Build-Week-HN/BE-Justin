exports.seed = function(knex) {
  return knex("topStories")
    .truncate()
    .then(function() {
      return knex("topStories").insert([
        {
          id: 21563309,
          author: "pcdoodle",
          title: "Intel to remove all BIOS updates from their website on Nov 22nd",
          url: "https://www.vogons.org/viewtopic.php?f=46&t=69184",
          comments_count: 20,
          score: 152,
          time: 1574074404
        },
        {
          id: 21563310,
          author: "dooble",
          title: "Far From Boring: Meet the Most Interesting Tunnel Boring Machines",
          url: "http://www.cat-bus.com/2018/01/far-from-boringmeet-the-most-interesting-tunnel-boring-machines/",
          comments_count: 10,
          score: 128,
          time: 1574074135
        },
        {
          id: 21563311,
          author: "roouble",
          title: "Gibberish Asian Font Mystery Solved",
          url: "https://hanzismatter.blogspot.com/2006/08/gibberish-asian-font-mystery-solved.html",
          comments_count: 5,
          score: 13,
          time: 1574074102
        },

      ]);
    });
};
